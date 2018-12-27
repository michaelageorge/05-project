'use strict';

module.exports = (bmp) => {
  for(let i = 0; i < bmp.colorArray.length; i += 4) {
    bmp.colorArray[i] = 0xFF - bmp.colorArray[i];
    bmp.colorArray[i + 1] = 0xFF - bmp.colorArray[i + 1];
    bmp.colorArray[i + 2] = 0xFF - bmp.colorArray[i + 2];
  }
};