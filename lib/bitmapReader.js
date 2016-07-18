const fs = require('fs');
const EE = require('events');

var value1 = 0;
var value2 = 0;
var value3 = 0;
var greyValue = 0;
var bitmapReader = module.exports = exports = {};
var ee = new EE();

ee.on('fileDone', function(buffer){
  bitmapReader.transform(buffer);
});

bitmapReader.read = function(){
  fs.readFile('../assets/non-palette-bitmap.bmp', (err, data) => {
    ee.emit('fileDone', data);
  });
};

bitmapReader.transform = function(buffer){
  for (var i = 54; i < buffer.length; i += 3) {
    value1 = buffer.readUInt8(i);
    value2 = buffer.readUInt8(i + 1);
    value3 = buffer.readUInt8(i + 2);
    greyValue = (value1 + value2 + value3) / 3;
    buffer.writeUInt8(greyValue, i);
    buffer.writeUInt8(greyValue, i + 1);
    buffer.writeUInt8(greyValue, i + 2);
  }
  bitmapReader.write(buffer);
};

bitmapReader.write = function(buffer){
  fs.writeFile('../assets/greyScaleBitmap.bmp', buffer);
};
