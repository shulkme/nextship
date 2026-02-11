/**
 * Log levels
 */
export enum LogLevel {
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
}

/**
 * Log entry interface
 */
interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  data?: unknown;
  error?: Error;
}

/**
 * Logger class for unified logging
 */
class Logger {
  private isProduction = process.env.NODE_ENV === 'production';

  /**
   * Format log entry
   */
  private formatLog(entry: LogEntry): string {
    const { level, message, timestamp, data } = entry;
    let log = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    if (data) {
      log += `\nData: ${JSON.stringify(data, null, 2)}`;
    }
    return log;
  }

  /**
   * Get current timestamp
   */
  private getTimestamp(): string {
    return new Date().toISOString();
  }

  /**
   * Send log to external service (e.g., Sentry, LogRocket)
   * This is a placeholder - integrate with your logging service
   */
  private sendToService(entry: LogEntry): void {
    // TODO: Integrate with your logging service
    // Example: Sentry.captureException(entry.error);
    // Example: LogRocket.captureMessage(entry.message);

    if (this.isProduction) {
      // In production, you would send to your logging service
      // For now, we'll just suppress the logs
      return;
    }
  }

  /**
   * Log debug message
   */
  debug(message: string, data?: unknown): void {
    const entry: LogEntry = {
      level: LogLevel.DEBUG,
      message,
      timestamp: this.getTimestamp(),
      data,
    };

    if (!this.isProduction) {
      console.debug(this.formatLog(entry));
    }
  }

  /**
   * Log info message
   */
  info(message: string, data?: unknown): void {
    const entry: LogEntry = {
      level: LogLevel.INFO,
      message,
      timestamp: this.getTimestamp(),
      data,
    };

    console.info(this.formatLog(entry));
    this.sendToService(entry);
  }

  /**
   * Log warning message
   */
  warn(message: string, data?: unknown): void {
    const entry: LogEntry = {
      level: LogLevel.WARN,
      message,
      timestamp: this.getTimestamp(),
      data,
    };

    console.warn(this.formatLog(entry));
    this.sendToService(entry);
  }

  /**
   * Log error message
   */
  error(message: string, error?: Error | unknown, data?: unknown): void {
    const entry: LogEntry = {
      level: LogLevel.ERROR,
      message,
      timestamp: this.getTimestamp(),
      error: error instanceof Error ? error : undefined,
      data: data || (error instanceof Error ? undefined : error),
    };

    console.error(this.formatLog(entry), error);
    this.sendToService(entry);
  }

  /**
   * Log API error
   */
  apiError(
    endpoint: string,
    status: number,
    message: string,
    data?: unknown,
  ): void {
    this.error(
      `API Error [${status}] ${endpoint}: ${message}`,
      undefined,
      data,
    );
  }

  /**
   * Log navigation event
   */
  navigation(from: string, to: string): void {
    this.debug(`Navigation: ${from} -> ${to}`);
  }

  /**
   * Log user action
   */
  userAction(action: string, data?: unknown): void {
    this.info(`User Action: ${action}`, data);
  }
}

/**
 * Export singleton logger instance
 */
export const logger = new Logger();

/**
 * Initialize error tracking service (e.g., Sentry)
 * Call this in your root layout
 */
export function initErrorTracking(): void {
  if (process.env.NODE_ENV === 'production') {
    // TODO: Initialize Sentry or other error tracking service
    // Example:
    // Sentry.init({
    //   dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    //   environment: process.env.NODE_ENV,
    //   tracesSampleRate: 1.0,
    // });
    logger.info('Error tracking initialized');
  }
}
