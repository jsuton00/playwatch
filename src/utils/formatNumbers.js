export const formatNumbertoK = (value) => {
	let inputNum = Number(value);
	let formattedNumber = '';

	if (inputNum >= 1000 && inputNum < 1000000) {
		formattedNumber = `${(Math.abs(inputNum) / 1000).toFixed(0)}k`;
		return formattedNumber;
	} else if (inputNum >= 1000000 && inputNum < 1000000000) {
		formattedNumber = `${(Math.abs(inputNum) / 1000000).toFixed(0)}m`;
		return formattedNumber;
	} else {
		formattedNumber = inputNum;
		return formattedNumber;
	}
};

export const formatThousandstoString = (value) => {
	let thousands = Number(value);
	return thousands.toLocaleString();
};
