class Canvas {
	constructor(domElement, height = 400, width = 400)
	{
		if(typeof domElement === 'undefined')
			throw new Error('MissingCanvas');

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
		this.domElement.setAttribute('height', newHeight);
	}

}

export default Canvas;