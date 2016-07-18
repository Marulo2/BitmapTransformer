'use strict';

const chai = require('chai').expect;
const fs = require('fs');


describe('bitmap testing', () => {
  it('should write to a new file', () => {
    let oldFile = fs.readFile('../assets/non-palette-bitmap.bmp');
    let newFile = fs.readFile('../assets/greyScaleBitmap.bmp');
    expect(oldFile).to.not.eql(newFile);
  });
});
