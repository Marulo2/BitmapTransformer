#!/usr/bin/env node

const fs = require('fs');
const bitmapReader = require('../lib/bitmapReader');

var bitmap;

var cli = function(cb){
  bitmapReader.read(bitmap);
  cb();
};

var createBitmap = function(){
  bitmapReader.transformer(bitmap);
};

cli(createBitmap);
