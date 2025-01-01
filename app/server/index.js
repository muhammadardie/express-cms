import logger from '../utils/logger';
import app from '../index';
import config from '../config';

// Test logs
logger.debug('Debug level message');
logger.info('Server process starting');

// Server setup and listener
app.listen(config.express.port, config.express.ip, function (error) {
  if (error) {
    logger.error('Unable to listen for connections', error)
    process.exit(10)
  }
  logger.info('express is listening on ' +
    config.express.ip + ':' + config.express.port)
})
