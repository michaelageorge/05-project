'use strict';

module.exports = (bmp) => {
  for(let i = 0; i < bmp.pixelArray.length; i++) {
    bmp.pixelArray[i] = bmp.pixelArray[bmp.pixelArray.length - i];
  }
};