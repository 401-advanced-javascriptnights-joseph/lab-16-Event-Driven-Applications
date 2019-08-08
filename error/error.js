'use strict';

const events = require('../events/events.js');

events.on('error', payload => {
  console.log('ERROR!');
});