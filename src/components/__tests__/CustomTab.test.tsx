import { render, screen, fireEvent } from "@testing-library/react";
import CustomTab from "../CustomTab";

test("tabs should be rendered", () => {
  render(<CustomTab />);
  const tabs = screen.getAllByRole("tab");
  expect(tabs).toHaveLength(3);
});

test("tabs other than products should be disabled", () => {
  render(<CustomTab />);
  const tabs = screen.getAllByRole("tab");
  expect(tabs).toHaveLength(3);
  expect(tabs[1]).toBeDisabled();
  expect(tabs[2]).toBeDisabled();
  fireEvent.click(tabs[1]);
  const checkBoxes = screen.getAllByRole("checkbox");
  expect(checkBoxes).toHaveLength(5);
});