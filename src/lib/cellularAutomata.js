'use strict';

import arraySuffle from 'array-shuffle';

class CellularAutomata {
	
	constructor(options)
	{
		const opts = options || {};

		if(typeof opts.canvas === "undefined")
			throw new Error("CanvasNotDefined");
		if(typeof opts.palettes === "undefined")
			throw new Error("PalettesNotDefined");
		
		this.canvas = opts.canvas;
		this.palettes = opts.palettes;
		this.w = 10;
		this.cells = Array(Math.floor(this.canvas.canvasWidth / this.w));
		  
		for (let i = 0; i < this.cells.length; i++) {
    		this.cells[i] = 0;
		}

		this.cells[this.cells.length/2] = 1;

		this.generation = 0;
		this.ruleset = [0, 1, 0, 1, 1, 0, 1, 0];
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
	}

	// methods here
	draw()
	{
		const ctx = this.canvas.context;

		for (let i = 0; i < this.cells.length; i++) {
			const palette = arraySuffle(this.palettes)[0];
			const bg = palette[0];
			const bg2 = palette[1];
			
			if (this.cells[i] === 1) {
				ctx.fillStyle = bg;
			} else {
				ctx.fillStyle = bg2;

				ctx.fillRect(i * this.w, this.generation * this.w, this.w, this.w);
			}
		}
		if (this.generation < this.canvas.canvasHeight/this.w) {
			this.generate();
		}
	}

}

export default CellularAutomata;