import { fireEvent, render, screen } from '@testing-library/react';
import ProductsTab from '../ProductsTab';
import store from "../../store/productStore";
import products from "../../../public/products.json";

test('renders the products tab properly', () => {
    render(<ProductsTab />);
    const checkBoxes = screen.getAllByRole("checkbox");
    expect(checkBoxes).toHaveLength(5);
    const inputText = screen.getByPlaceholderText("Type here...");
    expect(inputText).toBeInTheDocument();
    const searchIcon = screen.getByAltText("Q");
    expect(searchIcon).toBeInTheDocument();
});

test('Filters the products by categories properly', () => {
    render(<ProductsTab />);
    const checkBoxes = screen.getAllByRole("checkbox");
    expect(checkBoxes).toHaveLength(5);
    store.products = products;
    fireEvent.click(checkBoxes[0]);
    expect(store.filteredPoducts.length).toBe(3);
});

test('search the products by name or category', () => {
    render(<ProductsTab />);
    const inputText = screen.getByPlaceholderText("Type here...") as HTMLInputElement;
    expect(inputText).toBeInTheDocument();
    store.products = products;
    const testValue = "jira";
    fireEvent.change(inputText, { target: { value: testValue } });
    expect(inputText.value).toBe(testValue);
    expect(store.filteredPoducts.length).toBe(1);
});