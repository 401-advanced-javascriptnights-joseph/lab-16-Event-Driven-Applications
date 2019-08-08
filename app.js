'use strict';

const fs = require('fs');
const events = require('./events/events.js');
require('./logger/logger.js');

const alterFile = (file) => {
  fs.readFile( './files/test.txt', (err, data) => {
    if(err) {
      events.emit('error', payload => {
        console.log('ERROR!');
      });
    }
    let text = data.toString().toUpperCase();
    fs.writeFile( './files/test.txt', Buffer.from(text), (err, data) => {
      if(err) {
        events.emit('error', payload => {
          console.log('ERROR!');
        });
      }
      events.emit('uppercase', payload => {
        console.log(`${file} saved`);
      });
    });
  });
};

let file = process.argv.slice(2).shift();
alterFile(file);
