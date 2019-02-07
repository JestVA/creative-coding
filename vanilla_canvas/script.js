// Initialize drawing environment aka Canvas. 
// cx receives a context object containing methods to interface drawing

const canvas = document.querySelector("canvas");
const cx = canvas.getContext("2d");

// General setting (width, height)

const dimensions = [500, 500];

// Create attributes and set the size from the dimensions array

const canvas_width = canvas.setAttribute("width", dimensions[0]);
const canvas_height = canvas.setAttribute("height", dimensions[1]);


