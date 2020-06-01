'use strict';
import bestContrast from '../utils/bestContrast';

class PaletteMap {
	
	constructor(options)
	{
		const opts = options || {};

		if(typeof opts.canvas === "undefined")
			throw new Error("CanvasNotDefined");
		if(typeof opts.palettes === "undefined")
			throw new Error("PalettesNotDefined");
		
		this.canvas = opts.canvas;
		this.palettes = opts.palettes;
		this.rows = opts.rows || 10;
		this.cols = this.palettes.length / this.rows;
		this.padding = 5;
	}

	draw()
	{
		this.canvas.newHeight = 0.5 * this.canvas.canvasWidth;

		// very nice trick that deals with retina displays
		// canvas resolution basically doubles inside the smaller canvas
		this.canvas.domElement.style.height = (this.canvas.canvasHeight / 2) + "px";

		const palette_h = (this.canvas.canvasHeight + this.padding) / this.rows;
		const palette_w = (this.canvas.canvasWidth + this.padding) / this.cols;
		const tile_h = palette_h - this.padding;
		const tile_w = (palette_w - this.padding) / this.palettes[0].length;

		const ctx = this.canvas.context;
		// window.ctx = ctx;
		ctx.fillStyle = 'white';
		ctx.fillRect(0, 0, this.canvas.canvasWidth, this.canvas.canvasHeight);

		this.palettes.forEach((palette, i) => 
		{
			const col = Math.floor(i % this.cols);
			const row = Math.floor(i / this.cols);
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
			ctx.fillRect(0, (0.5 * tile_h) - (0.5 * tile_w), palette_w - this.padding, tile_w);

			ctx.restore();
		});
	}
}

export default PaletteMap;