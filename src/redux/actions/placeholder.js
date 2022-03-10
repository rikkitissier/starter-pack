export const PLACEHOLDER = "PLACEHOLDER";
export const doPlaceholder = data => ({
	type: PLACEHOLDER,
	payload: {
		text: data
	}
});