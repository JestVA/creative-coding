'use strict';

import { hex } from 'wcag-contrast';

const bestContrast = (palette, bg) => 
{
	let bestContrast = 0,
		cRatio = 0;

	palette.forEach((colour, i) =>
	{
		if(hex(bg, colour) > cRatio)
		{
			bestContrast = i;
			cRatio = hex(bg, colour);
		}
	});

	return bestContrast;
};

export default bestContrast;