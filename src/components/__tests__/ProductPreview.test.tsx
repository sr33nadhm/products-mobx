import { render, screen } from "@testing-library/react";
import ProductPreview from "../ProductPreview";
import store from "../../store/productStore";
import products from "../../../public/products.json";

test("product preview should be rendered as per filter", () => {
    store.products = products;
    store.setCurrentProduct(store.products[0]);
    render(<ProductPreview />);
    const header = screen.getByText(/Product Details/i);
    expect(header).toBeInTheDocument();
    const name = screen.queryAllByText(/Foxit/i);
    expect(name).toHaveLength(2);
})

test("product options should be rendered for valid product", () => {
    store.products = products;
    store.setCurrentProduct(store.products[0]);
    render(<ProductPreview />);
    const option1 = screen.getByText(/Option 1/i)
    expect(option1).toBeInTheDocument();
    const option2 = screen.getByText(/Option 2/i)
    expect(option2).toBeInTheDocument();
})

test("product options should not be rendered for product with invalid options", () => {
    store.products = products;
    store.setCurrentProduct(store.products[4]);
    render(<ProductPreview />);
    const option1 = screen.queryByText(/Option 1/i);
    const option2 = screen.queryByText(/Option 2/i);
    expect(option1).not.toBeInTheDocument();
    expect(option2).not.toBeInTheDocument();
})