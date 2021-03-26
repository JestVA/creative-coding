'use strict';

import seedrandom from 'seedrandom';
import arraySuffle from 'array-shuffle';
import SimplexNoise from 'simplex-noise';
import bestContrast from '../utils/bestContrast';

class RandomLines {

	constructor(options)
	{
		const opts = options || {};

		if(typeof opts.canvas === "undefined")
			throw new Error("CanvasNotDefined");
		if(typeof opts.palettes === "undefined")
			throw new Error("PalettesNotDefined");
		
		this.canvas = opts.canvas;
		this.palettes = opts.palettes;
		this.segments = opts.segments || 30;
		this.padding = opts.padding || 9;

		// this.lineWidth 
		// this.noise
	}

	line(ctx, xCoord, colour, simplex)
	{
		const height = this.canvas.canvasHeight;
		const yGap = height / this.segments;

		ctx.strokeStyle = colour;
		ctx.lineWidth = 40; // make variable?
		ctx.save();

		let currentY = 0;

		ctx.translate(xCoord, currentY);

		let x = 0;

		ctx.globalAlpha = Math.random(); // a number in 0 - 1 range

		ctx.beginPath();
		ctx.moveTo(x, currentY);

		for(let y = 1; y <= this.segments; y++)
		{
			const simplexValue = simplex.noise2D(xCoord, y);
			currentY = y * yGap + (simplexValue * 10);
			const currentX = x + (simplexValue * 5);
			ctx.lineTo(currentX, currentY);
		}

		ctx.stroke();
		ctx.restore();
	}

	draw(seed)
	{
		if(typeof seed === "undefined")
			seed = Math.floor(Math.random() * Math.pow(2, 20));
		
		const rng = seedrandom(seed) // make randomness predictable?!
		
		const simplex = new SimplexNoise(rng());

		//this.canvas.newHeight = 800 * 2;
		//this.canvas.domElement.style.height = (this.canvas.canvasHeight / 2) + "px";

		const ctx = this.canvas.context;
		const palette = arraySuffle(this.palettes)[0];
		const bg = palette[0];
		const lineColour = palette[bestContrast(palette, bg)];
		const currentLine = 0;
		ctx.fillStyle = bg;
		ctx.fillRect(0, 0, this.canvas.canvasWidth, this.canvas.canvasHeight);

		for(let x = 0; x < this.canvas.canvasWidth / this.padding; x++)
		{
			this.line(ctx, x * this.padding, lineColour, simplex); // refactor to use Typescript
		}

		// append the seed # 
		ctx.save();
		const txt = `#${seed}`;
		ctx.font = '20px Garamond Monotype';
		const txtWidth = ctx.measureText(txt).width;
		const txtHeight = parseInt(ctx.font);

		// draw bg
		ctx.fillStyle = bg;
		ctx.fillRect(5, (this.canvas.canvasHeight - txtHeight - 10), 
					txtWidth + 10, txtHeight + 2);
		
		ctx.fillStyle = lineColour;
		ctx.textBaseline = 'top';
		ctx.fillText(txt, 10, this.canvas.canvasHeight - (1.5 * txtHeight));
		ctx.restore();
	}
}

export default RandomLines;