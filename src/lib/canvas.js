class Canvas {
	constructor(domElement, height, width)
	{
		domElement.setAttribute("width", width);
		domElement.setAttribute("height", height);
		return domElement.getContext("2d");
	}
}

export default Canvas;