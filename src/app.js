import canvas from './lib/canvas';
import mapper from './utils/mapper';

const Canvas = canvas(document.getElementById("generative"), 800, 800);

console.log(Canvas)
// todos add more starter packages
// run AJs functions to see what his outputs were like
// try to compose a similar function myself

const palette = require('./lib/palette.json');



const mapPalette = palette.map(p => p.map(mapper));



 
console.log(mapPalette)

