import Canvas from './lib/canvas';
import palettes from './lib/palettes';
import PaletteMap from './lib/palette';
import RandomLines from './lib/randomLines';
import CellularAutomata from "./lib/cellularAutomata";
import { binaryNums } from "./utils/binaryNums";

const canvas = new Canvas(
	document.getElementById("generative"), 1000, 1000
);

const init = () => {

	window._palettes = palettes;

	console.log('Initialising palette map...');

	const paletteMap = new PaletteMap({ canvas, palettes });

	const randomLines = new RandomLines({ canvas, palettes, segments: 72, padding: 12 });

	const cellularAutomata  = new CellularAutomata({ canvas, palettes, max: 50, rule: null});

	const draw = 
	{
		palette: paletteMap.draw.bind(paletteMap),
		lines: randomLines.draw.bind(randomLines),
		automata: cellularAutomata.draw.bind(cellularAutomata)
	}

	window.draw = draw;
};

init();

async function genEntireRuleset()
{
	let canvas = null;

	for(let i = 0; i < 256; i++)
	{
			const rule = i;
			
			console.log("Looping...", rule);

			await new Promise(res => setTimeout(() => res(true), 1000));

			const leadingZeros = 8 - rule.toString(2).length;
	
			const leadingZerosString = leadingZeros > 0 ? Array(leadingZeros - 1).fill("").reduce((acc, _) => acc+= "0", "0") : "";
	
			const iterationRule = (leadingZerosString + rule.toString(2)).split('');
	
			canvas = new Canvas(document.getElementById('generative'), 1000, 1000);
		
			const automataInstance = new CellularAutomata({ canvas, palettes, max: 50, rule: iterationRule });
	
			automataInstance.draw();
	
			const exportLink = document.getElementById("export");
	
			exportLink.setAttribute("download", `it-${rule}.png`);
	
			const save = document.getElementById('generative')
	
			exportLink.setAttribute('href', save.toDataURL("image/png").replace("image/png", "image/octet-stream"));
	
			exportLink.click();
	}
}

genEntireRuleset();



console.log(canvas.canvasWidth);