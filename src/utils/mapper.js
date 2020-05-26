const mapper = color => 
{
	let newColor = '';
	const notDigit = /[^0-9]/;
	
	color.split('').forEach(c => 
	{
		if(notDigit.test(c))
			newColor += c;
		else
		{
			const cAsNumber = parseInt(c);
			newColor += Math.floor(Math.random(cAsNumber) * 10);
		} 
	});

	return newColor;
}

export default mapper;