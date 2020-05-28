class Canvas {
	constructor(domElement, height, width)
	{
		this.domElement = domElement;
		this.domElement.setAttribute('height', height);
		this.domElement.setAttribute('width', width);
		this.context = this.domElement.getContext("2d");
	}

	get canvasHeight()
	{
		return this.context.canvas.height;
	}

	get canvasWidth()
	{
		return this.context.canvas.width;
	}

	set newWidth(newWidth)
	{
		this.domElement.setAttribute('width', newWidth)
	}

	set newHeight(newHeight)
	{
		console.log(newHeight, 'new height');
		this.domElement.setAttribute('height', newHeight);
	}

}

export default Canvas;