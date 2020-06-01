import Canvas from './lib/canvas';
import palettes from './lib/palettes';
import PaletteMap from './lib/palette';
import seedrandom from 'seedrandom';
import arraySuffle from 'array-shuffle';
import SimplexNoise from 'simplex-noise';


const canvas = new Canvas(document.getElementById("generative"), 800, 800);

// const drawLines = (seed =  Math.floor(Math.random() * Math.pow(2, 20)))=>
// {
	

// 	const mistyVariable = new SimplexNoise(seed);

// 	myFirstCanvas.newHeight = 550 * 2;

// 	myFirstCanvas.domElement.style.height = (myFirstCanvas.canvasHeight / 2) + "px";

// 	const ctx = myFirstCanvas.context;

// 	const palette = arraySuffle(palettes)[0];

// 	const bg = palette[0];

// 	const lineColour = palette[bestContrast(palette, bg)];



// 	const padding = 9;
// 	const segments = 30;
// 	const height = myFirstCanvas.canvasHeight;
// 	const width = myFirstCanvas.canvasWidth;

// 	const yGap = height / segments;
// 	const currentLine = 0;

// 	ctx.fillStyle = bg;
// 	ctx.fillRect(0, 0, width, height);

// 	const drawSingleLine = xCoord => 
// 	{
// 		ctx.strokeStyle = lineColour;
// 		ctx.lineWidth = 40;
// 		ctx.save();

// 		let currentY = 0;

// 		ctx.translate(xCoord, currentY);

// 		let x = 0;

// 		ctx.globalAlpha = Math.random() // a number in 0 - 1 range

// 		ctx.beginPath();
// 		ctx.moveTo(x, currentY);

// 		for(let y = 1; y <= segments; y++)
// 		{
// 			const simplexNoise = mistyVariable.noise2D(xCoord, y);
// 			currentY = y * yGap + (simplexNoise * 10);
// 			const currentX = x + (simplexNoise * 5);
// 			ctx.lineTo(currentX, currentY);
// 		}

// 		ctx.stroke();
// 		ctx.restore();

// 	}

// 	for(let x = 0; x < width / padding; x++)
// 	{
// 		drawSingleLine(x * padding);
// 	}

// 	ctx.save();
// 	const txt = `#${seed}`;
// 	ctx.font = 'Garamond Monotype';
// 	const txtWidth = ctx.measureText(txt).width;
// 	const txtHeight = parseInt(ctx.font);

// 	ctx.fillStyle = bg;
// 	ctx.fillRect(5, (height - txtHeight - 10), txtWidth + 10, txtHeight + 2);
// 	ctx.fillStyle = lineColour;
// 	ctx.textBaseline = 'bottom';
// 	ctx.fillText(txt, 10, height - (1.5 * txtHeight));
// 	ctx.restore();

// }

const init = () => {

	window._palettes = palettes;

	console.log('Initialising palette map...');

	const paletteMap = new PaletteMap({ canvas, palettes });

	const draw = 
	{
		palette: paletteMap.draw.bind(paletteMap),
		// lines: drawLines
	}

	window.draw = draw;

};

init();



