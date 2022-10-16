import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the page properly', () => {
  render(<App />);
  const header = screen.getByText(/Create Demand/i);
  expect(header).toBeInTheDocument();
  const checkBoxes = screen.getAllByRole("checkbox");
  expect(checkBoxes).toHaveLength(5);
  const inputText = screen.getByPlaceholderText("Type here...");
  expect(inputText).toBeInTheDocument();
});
