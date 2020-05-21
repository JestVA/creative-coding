// Initialize drawing environment aka Canvas. 
// cx receives a context object containing methods to interface drawing
const canvas = document.querySelector("canvas");
const cx = canvas.getContext("2d");
console.log(cx)
// General setting (width, height)
const dimensions = [500, 500];

// Create attributes and set the size from the dimensions array
const canvas_width = canvas.setAttribute("width", dimensions[0]);
const canvas_height = canvas.setAttribute("height", dimensions[1]);

// Start drawing 
// fillStyle is a property of the context object


cx.fillStyle = "orange";


// 100 pixels wide, 50 pixels high
// top-left coordinates at (10, 10)
// (0, 0) is always top-left corner
// fillRect() is a method of the context object


cx.fillRect(10, 10, 100, 50)


// lines and surfaces

/*
cx.strokeStyle = "grey"
*/

// first coordinate is X-axis
// second coordinate is Y-axis

/*
cx.strokeRect(50, 70, 50, 50);
cx.lineWidth = 5;
cx.strokeRect(200, 10, 50, 50);
*/

// paths (a sequence of lines)

/*
cx.beginPath();
for (let y = 10; y < 500; y += 10) {
    cx.strokeStyle = "orange"
    cx.moveTo(10, y);
    cx.lineTo(490, y);
    cx.moveTo(60, y - 55)
    cx.lineTo(440, y - 55)
}
cx.stroke();
*/

// same paths but with fill()
/*
cx.beginPath();
cx.moveTo(50, 10);
cx.lineTo(10, 70);
cx.lineTo(90, 70)
// if the path is not closed when the fill method is called
// it will create a new lineTo from the last line to the first
cx.fill()
*/

// curves

/*
// vreau sa desenez ceva algoritmic
// This turned out to be a study of drawn lines
// and randomness, order, patterns and meaning 
let n = () => Math.floor(Math.random() * 500)
cx.beginPath()
cx.strokeStyle = 'grey'
cx.moveTo(n(), n())
cx.lineTo(n(), n())
cx.moveTo(n(), n())
cx.lineTo(n(), n())
cx.moveTo(n(), n())
cx.lineTo(n(), n())
*/