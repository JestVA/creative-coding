import Canvas from './lib/canvas';
import palettes from './lib/palettes';
import { hex } from 'wcag-contrast';
import seedrandom from 'seedrandom';
import arraySuffle from 'array-shuffle';
import SimplexNoise from 'simplex-noise';


const myFirstCanvas = new Canvas(document.getElementById("generative"), 1200, 1200);

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


const drawLines = (seed =  Math.floor(Math.random() * Math.pow(2, 20)))=>
{
	console.log(seedrandom);

	const mistyVariable = new SimplexNoise(seed);

	myFirstCanvas.newHeight = 350 * 2;

	myFirstCanvas.domElement.style.height = (myFirstCanvas.canvasHeight / 2) + "px";

	const ctx = myFirstCanvas.context;

	const palette = arraySuffle(palettes)[0];

	const bg = palette[0];

	const lineColour = palette[bestContrast(palette, bg)];

	console.log(palette, bg, lineColour);

	const padding = 90;
	const segments = 300;
	const height = myFirstCanvas.canvasHeight;
	const width = myFirstCanvas.canvasWidth;

	const yGap = height / segments;
	const currentLine = 0;

	ctx.fillStyle = bg;
	ctx.fillRect(0, 0, width, height);

	const drawSingleLine = xCoord => 
	{
		ctx.strokeStyle = lineColour;
		ctx.lineWidth = 2;
		ctx.save();

		let currentY = 0;

		ctx.translate(xCoord, currentY);

		let x = 0;

		ctx.globalAlpha = Math.random() // a number in 0 - 1 range

		ctx.beginPath();
		ctx.moveTo(x, currentY);

		for(let y = 1; y <= segments; y++)
		{
			const simplexNoise = mistyVariable.noise2D(xCoord, y);
			currentY = y * yGap + (simplexNoise * 10);
			const currentX = x + (simplexNoise * 5);
			ctx.lineTo(currentX, currentY);
		}

		ctx.stroke();
		ctx.restore();

	}

	for(let x = 0; x < width / padding; x++)
	{
		drawSingleLine(x * padding);
	}

}






const draw = 
{ 
	palette: drawPalette, 
	lines: drawLines
};

window.draw = draw;

init();




// run AJs functions to see what his outputs were like
// try to compose a similar function myself
 


