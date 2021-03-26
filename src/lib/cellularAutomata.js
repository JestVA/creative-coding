'use strict';

import arraySuffle from 'array-shuffle';
import { binaryNums } from "../utils/binaryNums";

class CellularAutomata {
	
	constructor(options)
	{

		const opts = options || {};

		if(typeof opts.canvas === "undefined")
			throw new Error("CanvasNotDefined");
		if(typeof opts.palettes === "undefined")
			throw new Error("PalettesNotDefined");
		
		this.canvas = opts.canvas;

		this.max = opts.max;

		this.palettes = opts.palettes;
		this.w = this.max;
		this.cells = Array(Math.floor(this.canvas.canvasWidth / this.w));
		  
		for (let i = 0; i < this.cells.length; i++) {
    		this.cells[i] = 0;
		}

		this.cells[this.cells.length/2] = 1;

		this.generation = 0;
		console.log("instance rule is ", opts.rule)
		this.ruleset = opts.rule || [1,1,1,1,1,1,1,1];
	}

	//// Implementing the Wolfram rules
	rules(a, b, c) {
		if (a == 1 && b == 1 && c == 1) return this.ruleset[0];
		if (a == 1 && b == 1 && c == 0) return this.ruleset[1];
		if (a == 1 && b == 0 && c == 1) return this.ruleset[2];
		if (a == 1 && b == 0 && c == 0) return this.ruleset[3];
		if (a == 0 && b == 1 && c == 1) return this.ruleset[4];
		if (a == 0 && b == 1 && c == 0) return this.ruleset[5];
		if (a == 0 && b == 0 && c == 1) return this.ruleset[6];
		if (a == 0 && b == 0 && c == 0) return this.ruleset[7];
		return 0;
	}
	
	generate()
	{
		// First we create an empty array for the new values
		let nextgen = Array(this.cells.length);
		
		// For every spot, determine new state by examing current state, and neighbor states
		// Ignore edges that only have one neighor
		for (let i = 1; i < this.cells.length-1; i++) {
			let left   = this.cells[i-1];   // Left neighbor state
			let me     = this.cells[i];     // Current state
			let right  = this.cells[i+1];   // Right neighbor state
			nextgen[i] = this.rules(left, me, right); // Compute next generation state based on ruleset
		}

		// The current generation is the new generation
		this.cells = nextgen;
		this.generation++;

		// need this here to fill the whole area
		this.draw();
	}

	draw()
	{
		

		const ctx = this.canvas.context;
		const palette = arraySuffle(this.palettes)[0];

		for (let i = 0; i < this.cells.length; i++) {
		
			const bg = palette[0];
			const bg2 = palette[1];
			
			if (this.cells[i] === 1) {
				ctx.fillStyle = bg;
				ctx.fillRect(i * this.w, this.generation * this.w, this.w, this.w);
			} else {
				ctx.fillStyle = bg2;
				ctx.fillRect(i * this.w, this.generation * this.w, this.w, this.w);
			}
		}

		if (this.generation < this.canvas.canvasHeight/this.w) {
			
			this.generate();
		}

		ctx.save();
		const txt = `#${this.ruleset.join('')}`;
		ctx.font = '16px Courier';
		const txtWidth = ctx.measureText(txt).width;
		const txtHeight = parseInt(ctx.font);

		// draw bg
		//ctx.fillStyle = palette[0];
		ctx.fillRect(5, (this.canvas.canvasHeight - txtHeight - 10), 
					txtWidth + 10, txtHeight + 2);
		
		ctx.fillStyle = palette[1];
		ctx.textBaseline = 'top';
		ctx.fillText(txt, 10, this.canvas.canvasHeight - (1.5 * txtHeight));
		ctx.restore();
		
		
	}

	

}

export default CellularAutomata;