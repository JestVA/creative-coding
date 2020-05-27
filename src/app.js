import Canvas from './lib/canvas';
import palettes from './lib/palettes';
import { hex } from 'wcag-contrast';
import seedrandom from 'seedrandom';
import arraySuffle from 'array-shuffle';
import SimplexNoise from 'simplex-noise';


const myFirstCanvas = new Canvas(document.getElementById("generative"), 800, 800);

const init = () => {
	window._myFirstCanvas = myFirstCanvas;
	window._palettes = palettes;
};

const bestContrast = (palette, bg) =>
{
	let bestContrast = 0,
		cRatio = 0;

	palette.forEach((colour, i) =>
	{
		if(hex(bg, colour) > cRatio)
		{
			bestContrast = i;
			cRatio = hex(bg, colour);
		}
	});

	return bestContrast;
};

const drawPalette = () =>
{

}



console.log(myFirstCanvas);

myFirstCanvas.canvasHeight
myFirstCanvas.canvasWidth

myFirstCanvas.newWidth = 5
myFirstCanvas.newHeight = 700
console.log(myFirstCanvas.context)


console.log(myFirstCanvas)

init();




// run AJs functions to see what his outputs were like
// try to compose a similar function myself
 


