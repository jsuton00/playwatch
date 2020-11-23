import moment from 'moment';

export const formatDates = (value) => {
	let inputDateValue = new Date(value);
	return moment(inputDateValue).format('Do MMM YYYY');
};
