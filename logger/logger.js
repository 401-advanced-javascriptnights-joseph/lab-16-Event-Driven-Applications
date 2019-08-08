'use strict';

const events = require('../events/events.js');

events.on('error', payload => console.log('error'));
events.on('uppercase', payload => console.log('text to uppercase and saved'));
events.on('save', payload => doLog('save', payload));

function doLog(action, payload) {
  console.log( action.toUpperCase(), payload );
}