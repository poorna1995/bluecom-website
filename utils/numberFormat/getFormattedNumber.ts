export default function getFormattedNumber(
	numberValue: number,
	locale: string | undefined,
) {
	const result = new Intl.NumberFormat(locale ?? "en-US", {
		maximumFractionDigits: 2,
		minimumFractionDigits: 2,
	}).format(numberValue);
	return result;
}
