
//let x = [0, 1, 0, 1, 2, 1];

export function tracker(tickers = []) {
	let string = x.join("");
	let isPeak = false;
	const pos = [];
	const peaks = [];

	for (let s = 0; s < string.length; s++) {
		if (string[s] > string[s - 1]) {
			isPeak = true;
		} else {
			isPeak = false;
		}

		if (isPeak) {
			pos.push(s);
			peaks.push(parseInt(string[s]));
		}
	}

	console.log("Peaks detected:", peaks);
	return { pos, peaks };
}

// tracker(x); // [ 1,1,2 ]

// function can track index to index increase per ticker
// buy low, sell high e.g. sell peak @ 6 to 1 R:R ratio
// trading could be conducted on something as simple as this
// managing range conditions like and failed breakouts in a range of 0-1
