'use strict';

module.exports = (bmp) => {
  for(let i = 0; i < bmp.pixelArray.length; i++) {
    bmp.pixelArray[i] = bmp.pixelArray[i] / 0x0F;
  }
};