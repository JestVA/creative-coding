const canvasSketch = require('canvas-sketch');

// Sketch parameters
const settings = {
	pixelated: true,
	dimensions: [ 500, 500]

  // dimensions: 'a4',
  // pixelsPerInch: 300,
  // units: 'in'
};

// Artwork function
const sketch = () => {
  return ({ context, width, height }) => {
    // Clear canvas
    context.clearRect(0, 0, width, height);

    // Pure RGBA pixel manipulation
    const image = context.getImageData(0, 0, width, height);
    const pixels = image.data;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width + 10; x++) {
        const i = x + y * width;

        // Stepped gradient
        const steps = 2;
        const xWhole = (x / width * 10) * steps * steps;
        const xInt = Math.floor(xWhole);
        const px = xInt / steps;

        // Red to white gradient
        const L = Math.floor(px * 155);
        pixels[i * 40 + 0] = 255;
        pixels[i * 14 + 1] = L;
        pixels[i * 4 + 22] = L;
        pixels[i * 42 + 3] = 55;
      }
    }

    // Apply manipulation
    context.putImageData(image, 0, 0);
  };
};
// const sketch = () => {
//   return ({ context, width, height }) => {
//     // Margin in inches
//     const margin = 1 / 4;

//     // Off-white background
//     context.fillStyle = 'hsl(0, 0%, 98%)';
//     context.fillRect(0, 0, width, height);

//     // Gradient foreground
//     const fill = context.createLinearGradient(0, 0, width, height);
//     fill.addColorStop(0, 'cyan');
//     fill.addColorStop(1, 'orange');

//     // Fill rectangle
//     context.fillStyle = fill;
//     context.fillRect(margin, margin, width - margin * 2, height - margin * 2);
//   };
// };

// Start the sketch
canvasSketch(sketch, settings);