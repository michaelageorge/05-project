'use strict';

const fs = require('fs');

fs.readFile('./assets/baldy.bmp', (err, data) => {
  if(err) { throw err; }

  let dataRaw = [];

  // dataRaw.push(data.slice(54, 1146));
  // console.log('offset', data.readInt32LE(10)); //1146

  fs.writeFile('./dataRaw.txt', dataRaw.toString('hex'), err => {
    if(err) { throw err; }
  });


  console.log('bit', data.readInt32LE(34));
  // console.log('color array', data.slice(54, 1146));
  // console.log('data.readInt16LE(26)');


});

// function parse(buffer) {
//   let colorArray = buffer.slice(54, this.offset);
//   console.log('This is the colorArray', colorArray);
// }

// this.colorPlanes = buffer.readInt16LE(26)

