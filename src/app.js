import Canvas from './lib/canvas';
import palettes from './lib/palettes';
import PaletteMap from './lib/palette';
import RandomLines from './lib/randomLines';
import CellularAutomata from "./lib/cellularAutomata";
import { binaryNums } from "./utils/binaryNums";

const canvas = new Canvas(
	document.getElementById("generative"), 500, 500
);

//const init = () => {

//	window._palettes = palettes;

//	const paletteMap = new PaletteMap({ canvas, palettes });

//	const randomLines = new RandomLines({ canvas, palettes, segments: 72, padding: 12 });

//	const cellularAutomata  = new CellularAutomata({ canvas, palettes, max: 50, rule: null});

//	const draw = 
//	{
//		palette: paletteMap.draw.bind(paletteMap),
//		lines: randomLines.draw.bind(randomLines),
//		//automata: cellularAutomata.draw.bind(cellularAutomata)
//		automata: (rule) => cellularAutomata.draw(rule)
//	}

//	window.draw = draw;
//};

//init();

async function genEntireRuleset()
{
	

	for(let i = 0; i < 256; i++)
	{
			canvas.unmount();
			
			await new Promise(res => setTimeout(() => res(true), 1000));

			const rule = i;
			
			console.log("Looping...", rule);

			const leadingZeros = 8 - rule.toString(2).length;
	
			const leadingZerosString = leadingZeros > 0 ? Array(leadingZeros - 1).fill("").reduce((acc, _) => acc+= "0", "0") : "";
	
			const iterationRule = (leadingZerosString + rule.toString(2)).split('');

			const automataInstance = new CellularAutomata({ canvas, palettes, max: 50 });
	
			automataInstance.draw(iterationRule.map(s => +s));

			automataInstance.reset();

			await new Promise(res => setTimeout(() => res(true), 4000));
	
			const exportLink = document.getElementById("export");
	
			exportLink.setAttribute("download", `it-${rule}.png`);
	
			const save = document.getElementById('generative')
	
			exportLink.setAttribute('href', save.toDataURL("image/png").replace("image/png", "image/octet-stream"));
	
			exportLink.click();


	}
}

genEntireRuleset();

//const genLines = () =>
//{
//	const randomLines = new RandomLines({ canvas, palettes, segments: 72, padding: 12 });

//	await new Promise(res => setTimeout(() => res(true), 3000));
//	randomLines.draw()
//}


console.log(canvas.canvasWidth);