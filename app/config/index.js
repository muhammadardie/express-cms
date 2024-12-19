let config = module.exports
let PRODUCTION = process.env.NODE_ENV === 'production'

config.express = {
  port: process.env.PORT || 3000,
  ip: 'localhost'
}

config.mongodb = {
  url: process.env.MONGODB_URL || 27017
}

config.redis = {
  url: process.env.REDIS_URL || 'http://localhost:6379'
}

if (PRODUCTION) {
  config.express.ip = '0.0.0.0'
}

config.accessSecret = process.env.ACCESS_SECRET;
config.refreshSecret = process.env.REFRESH_SECRET;
config.accessTokenExpiry = process.env.ACCESS_TOKEN_EXPIRY;
config.refreshTokenExpiry = process.env.REFRESH_TOKEN_EXPIRY;