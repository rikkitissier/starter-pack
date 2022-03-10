import { render, fireEvent, screen } from "./utils";
import App from "../App";

test("renders app", () => {
	render(<App />);
	const placeholder = screen.getByTestId('placeholder');
	expect(placeholder).toHaveTextContent('Tellus Porta Etiam');
});

test("button changes placeholder", () => {
	render(<App />);
	const placeholder = screen.getByTestId('placeholder');
	const button = screen.getByRole('button');

	fireEvent.click(button);

	expect(placeholder).toHaveTextContent('Updated placeholder');
});
