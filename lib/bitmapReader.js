const fs = require('fs');

var value1 = 0;
var value2 = 0;
var value3 = 0;
var greyValue = 0;
var headers = {};
var bitmapReader = module.exports = exports = {};

bitmapReader.read = function(bufferData){
  bufferData = fs.readFile('assets/non-pallete-bitmap.bmp', (err, bufferData) => {
    if (err) throw err;
    console.log(bufferData);
    return bufferData;
  });
};

bitmapReader.transform = function(buffer){
  for(var i=54; i < buffer.length; i+=3) {
    value1 = buffer.readUInt8(i);
    value2 = buffer.readUInt8(i+1);
    value3 = buffer.readUInt8(i+2);
    greyValue = (value1 + value2 + value3) / 3;
    buffer.writeUInt8(greyValue, i);
    buffer.writeUInt8(greyValue, i+1);
    buffer.writeUInt8(greyValue, i+2);
  }
  bitmapReader.write(buffer);
};

bitmapReader.write = function(buffer){
  fs.writeFile('assets/greyScaleBitmap.bmp', buffer);
};

debugger;
