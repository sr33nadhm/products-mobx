import { render, screen } from "@testing-library/react";
import SearchResults from "../SearchResults";
import store from "../../store/productStore";
import products from "../../../public/products.json";

test("results should be rendered empty", () => {
    render(<SearchResults />);
    const container = screen.getAllByTestId("search-container");
    expect(container).toHaveLength(1);
})

test("results should be rendered as per filter", () => {
    store.products = products;
    store.searchFromFullProducts("jira");
    render(<SearchResults />);
    const results = screen.getAllByTestId("search-result");
    expect(results).toHaveLength(1);
})