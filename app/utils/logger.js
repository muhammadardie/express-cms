import { pino } from 'pino';

const isDevelopment = process.env.NODE_ENV === 'development';
const logger = pino({
    level: process.env.LOG_LEVEL || 'debug',  // Set log level
    transport: 
    { 
          target: isDevelopment ? 'pino-pretty' : undefined,  // Use pino-pretty for development
          options: {
            colorize: true,
            translateTime: 'SYS:standard',
            ignore: 'pid,hostname'
          }
    }
});
  
export default logger;