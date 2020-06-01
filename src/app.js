import Canvas from './lib/canvas';
import palettes from './lib/palettes';
import PaletteMap from './lib/palette';
import RandomLines from './lib/randomLines';


const canvas = new Canvas(
	document.getElementById("generative"), 800, 1600
);

const init = () => {

	window._palettes = palettes;

	console.log('Initialising palette map...');

	const paletteMap = new PaletteMap({ canvas, palettes });

	const randomLines = new RandomLines({ canvas, palettes, segments: 72, padding: 12});

	const draw = 
	{
		palette: paletteMap.draw.bind(paletteMap),
		lines: randomLines.draw.bind(randomLines)
	}

	window.draw = draw;
};

init();