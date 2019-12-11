#!/usr/bin/env node
const 
	dotenv = require('dotenv').config(),
	app    = require('../index'),
	config = require('../config'),
	bole   = require('bole'), // logging system
	log    = bole('server');


bole.output({level: 'debug', stream: process.stdout})
log.info('server process starting')

// Note that there's not much logic in this file.
// The server should be mostly "glue" code to set things up and
// then start listening
app.listen(config.express.port, config.express.ip, function (error) {
  if (error) {
    log.error('Unable to listen for connections', error)
    process.exit(10)
  }
  log.info('express is listening on http://' +
    config.express.ip + ':' + config.express.port)
})
