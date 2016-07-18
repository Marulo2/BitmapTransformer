#!/usr/bin/env node

const bitmapReader = require('../lib/bitmapReader');

var bitmap;

var cli = function(){
  bitmapReader.read(bitmap);
};

cli();
