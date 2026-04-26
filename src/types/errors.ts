export type ErrorSeverity = 'error' | 'warning' | 'info';

export interface AppError {
  code: string;
  message: string;
  severity: ErrorSeverity;
  details?: string;
  timestamp: number;
}

export enum ErrorCode {
  // Auth
  AUTH_SIGNUP_FAILED = 'AUTH_SIGNUP_FAILED',
  AUTH_LOGIN_FAILED = 'AUTH_LOGIN_FAILED',
  EMAIL_ALREADY_EXISTS = 'EMAIL_ALREADY_EXISTS',
  INVALID_EMAIL = 'INVALID_EMAIL',
  WEAK_PASSWORD = 'WEAK_PASSWORD',
  
  // Cart
  CART_ADD_FAILED = 'CART_ADD_FAILED',
  CART_UPDATE_FAILED = 'CART_UPDATE_FAILED',
  INVALID_QUANTITY = 'INVALID_QUANTITY',
  
  // Checkout
  CHECKOUT_FAILED = 'CHECKOUT_FAILED',
  PAYMENT_FAILED = 'PAYMENT_FAILED',
  INVALID_SHIPPING_DETAILS = 'INVALID_SHIPPING_DETAILS',
  INVALID_PAYMENT_DETAILS = 'INVALID_PAYMENT_DETAILS',
  
  // Data
  FETCH_FAILED = 'FETCH_FAILED',
  PRODUCT_NOT_FOUND = 'PRODUCT_NOT_FOUND',
  
  // Network
  NETWORK_ERROR = 'NETWORK_ERROR',
  TIMEOUT = 'TIMEOUT',
  
  // Unknown
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

export const ERROR_MESSAGES: Record<ErrorCode, { message: string; suggestion: string }> = {
  [ErrorCode.AUTH_SIGNUP_FAILED]: {
    message: 'Failed to create account',
    suggestion: 'Please try again or contact support if the issue persists.',
  },
  [ErrorCode.AUTH_LOGIN_FAILED]: {
    message: 'Invalid email or password',
    suggestion: 'Check your credentials and try again.',
  },
  [ErrorCode.EMAIL_ALREADY_EXISTS]: {
    message: 'Email already in use',
    suggestion: 'Sign in instead or use a different email address.',
  },
  [ErrorCode.INVALID_EMAIL]: {
    message: 'Invalid email address',
    suggestion: 'Please enter a valid email (e.g., you@example.com).',
  },
  [ErrorCode.WEAK_PASSWORD]: {
    message: 'Password does not meet requirements',
    suggestion: 'Use at least 8 characters with uppercase, lowercase, and number/special character.',
  },
  [ErrorCode.CART_ADD_FAILED]: {
    message: 'Failed to add item to cart',
    suggestion: 'Please try again.',
  },
  [ErrorCode.CART_UPDATE_FAILED]: {
    message: 'Failed to update cart',
    suggestion: 'Please try again.',
  },
  [ErrorCode.INVALID_QUANTITY]: {
    message: 'Invalid quantity',
    suggestion: 'Quantity must be between 1 and 10.',
  },
  [ErrorCode.CHECKOUT_FAILED]: {
    message: 'Checkout failed',
    suggestion: 'Please review your information and try again.',
  },
  [ErrorCode.PAYMENT_FAILED]: {
    message: 'Payment failed',
    suggestion: 'Check your payment details and try again.',
  },
  [ErrorCode.INVALID_SHIPPING_DETAILS]: {
    message: 'Invalid shipping address',
    suggestion: 'Please fill in all required fields.',
  },
  [ErrorCode.INVALID_PAYMENT_DETAILS]: {
    message: 'Invalid payment details',
    suggestion: 'Check your card or phone number and try again.',
  },
  [ErrorCode.FETCH_FAILED]: {
    message: 'Failed to load data',
    suggestion: 'Check your connection and refresh the page.',
  },
  [ErrorCode.PRODUCT_NOT_FOUND]: {
    message: 'Product not found',
    suggestion: 'The product may have been removed. Return to the collection.',
  },
  [ErrorCode.NETWORK_ERROR]: {
    message: 'Network connection error',
    suggestion: 'Check your internet connection and try again.',
  },
  [ErrorCode.TIMEOUT]: {
    message: 'Request timed out',
    suggestion: 'The request took too long. Please try again.',
  },
  [ErrorCode.UNKNOWN_ERROR]: {
    message: 'Something went wrong',
    suggestion: 'Please try again or contact support.',
  },
};
