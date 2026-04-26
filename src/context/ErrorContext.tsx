import React, { createContext, useContext, useState, useCallback } from 'react';
import { AppError, ErrorCode, ERROR_MESSAGES } from '../types/errors';

interface ErrorContextType {
  errors: AppError[];
  addError: (code: ErrorCode, details?: string) => void;
  removeError: (timestamp: number) => void;
  clearErrors: () => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export function ErrorProvider({ children }: { children: React.ReactNode }) {
  const [errors, setErrors] = useState<AppError[]>([]);

  const addError = useCallback((code: ErrorCode, details?: string) => {
    const { message, suggestion } = ERROR_MESSAGES[code];
    const fullMessage = details ? `${message}: ${details}` : message;

    const error: AppError = {
      code,
      message: fullMessage,
      severity: 'error',
      details: suggestion,
      timestamp: Date.now(),
    };

    setErrors((prev) => [...prev, error]);

    // Auto-remove after 6 seconds
    setTimeout(() => {
      removeError(error.timestamp);
    }, 6000);
  }, []);

  const removeError = useCallback((timestamp: number) => {
    setErrors((prev) => prev.filter((e) => e.timestamp !== timestamp));
  }, []);

  const clearErrors = useCallback(() => {
    setErrors([]);
  }, []);

  return (
    <ErrorContext.Provider value={{ errors, addError, removeError, clearErrors }}>
      {children}
    </ErrorContext.Provider>
  );
}

export function useError() {
  const context = useContext(ErrorContext);
  if (context === undefined) {
    throw new Error('useError must be used within ErrorProvider');
  }
  return context;
}
