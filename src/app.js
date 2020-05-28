import Canvas from './lib/canvas';
import palettes from './lib/palettes';
import { hex } from 'wcag-contrast';
import seedrandom from 'seedrandom';
import arraySuffle from 'array-shuffle';
import SimplexNoise from 'simplex-noise';


const myFirstCanvas = new Canvas(document.getElementById("generative"), 1600, 1600);

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
	myFirstCanvas.newHeight = 0.5 * myFirstCanvas.canvasWidth;

	// very nice trick that deals with retina displays
	// canvas resolution basically doubles inside the smaller canvas
	myFirstCanvas.domElement.style.height = (myFirstCanvas.canvasHeight / 2) + "px";

	const rows = 10;
	const cols = palettes.length / rows;
	const padding = 5;
	const palette_h = (myFirstCanvas.canvasHeight + padding) / rows;
	const palette_w = (myFirstCanvas.canvasWidth + padding) / cols;
	const tile_h = palette_h - padding;
	const tile_w = (palette_w - padding) / palettes[0].length;

	const ctx = myFirstCanvas.context;
	window.ctx = ctx;
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, myFirstCanvas.canvasWidth, myFirstCanvas.canvasHeight);

	palettes.forEach((palette, i) => 
	{
		const col = Math.floor(i % cols);
		const row = Math.floor(i / cols);
		const x = col * palette_w;
		const y = row * palette_h;

		ctx.save();
		ctx.translate(x, y);

		const bg = palette[0];

		palette.forEach((colour, j) => 
		{
			const tile_x = j * tile_w;
			ctx.fillStyle = colour;
			ctx.fillRect(tile_x, 0, tile_w, tile_h);
		});

		ctx.fillStyle = palette[bestContrast(palette, palette[0])];
		ctx.fillRect(0, (0.5 * tile_h) - (0.5 * tile_w), palette_w - padding, tile_w);

		ctx.restore();
	});

}



console.log(myFirstCanvas);

myFirstCanvas.canvasHeight
myFirstCanvas.canvasWidth


console.log(myFirstCanvas.context)


console.log(myFirstCanvas)
const draw = { palette: drawPalette };
window.draw = draw;

init();
// drawPalette;



// run AJs functions to see what his outputs were like
// try to compose a similar function myself
 


