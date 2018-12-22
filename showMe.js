'use strict';

const fs = require('fs');

fs.readFile('./assets/baldy.bmp', (err, data) => {
  if(err) { throw err; }

  let dataRaw = [];

  dataRaw.push(data.slice(6, 15))
  // dataRaw.push(data.slice(54, this.offset))


  // fs.writeFile('./dataRaw.txt', dataRaw, err => {
  //   if(err) { throw err; }
  // });

  console.log('data', dataRaw);
  
});

// function(buffer) {
//   this.buffer = buffer;
//   this.type = buffer.toString('utf-8', 0, 2);
//   this.size = buffer.readInt32LE(2);
//   this.offset = buffer.readInt32LE(10);
//   this.headerSize = buffer.readInt32LE(14);
//   this.width = buffer.readInt32LE(18);
//   this.height = buffer.readInt32LE(22);
//   this.colorPlanes = buffer.readInt16LE(26);
//   this.colorBits = buffer.readInt16LE(28);
//   this.colorPalette = buffer.readInt32(46);
//   this.impColors = buffer.readInt32(50);