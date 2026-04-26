import { ErrorCode } from '../types/errors';

export const handleFetchError = (error: unknown): ErrorCode => {
  if (error instanceof TypeError) {
    if (error.message.includes('network') || error.message.includes('fetch')) {
      return ErrorCode.NETWORK_ERROR;
    }
  }

  if (error instanceof Error) {
    if (error.message.includes('timeout')) {
      return ErrorCode.TIMEOUT;
    }
  }

  return ErrorCode.UNKNOWN_ERROR;
};

export const createErrorHandler = (addError: (code: ErrorCode, details?: string) => void) => {
  return (error: unknown, fallbackCode: ErrorCode = ErrorCode.UNKNOWN_ERROR) => {
    console.error('Error caught:', error);

    if (error instanceof Error) {
      addError(fallbackCode, error.message);
    } else if (typeof error === 'string') {
      addError(fallbackCode, error);
    } else {
      addError(fallbackCode);
    }
  };
};
