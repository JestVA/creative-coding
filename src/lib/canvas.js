const Canvas = (canvasElement, w = 500, h = 500) =>
{
	canvasElement.setAttribute("width", w);
	canvasElement.setAttribute("height", h);
	// no settings for now
	return canvasElement.getContext("2d");
};

export default Canvas;