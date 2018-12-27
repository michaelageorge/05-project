'use strict';

module.exports = (bmp) => {
  for(let i = 0; i < bmp.colorArray.length; i += 4) {
    let red = bmp.colorArray[i];
    let green = bmp.colorArray[i + 1];
    let blue = bmp.colorArray[i + 2];
    let index = bmp.colorArray[i + 3];

    let color = Math.round((red + green + blue)/3);

    bmp.colorArray[i] = color;
    bmp.colorArray[i + 1] = color;
    bmp.colorArray[i + 2] = color;
  }
};