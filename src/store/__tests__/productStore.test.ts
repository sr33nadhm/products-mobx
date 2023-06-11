import store from "../productStore";
import products from "../../../public/products.json";

describe("ProductStore", () => {
  it("initiates store properly", () => {
    store.setProducts(products);
    expect(store.products.length).toBe(11);
    expect(store.currentProduct).toStrictEqual({});
    expect(store.filteredPoducts.length).toBe(11);
  });

  it("searches products properly", () => {
    store.setProducts(products);
    expect(store.products.length).toBe(11);
    store.searchFromFullProducts("jira");
    expect(store.filteredPoducts.length).toBe(1);
    store.searchFromFullProducts("JIRA");
    expect(store.filteredPoducts.length).toBe(0);
  });

  it("filters products properly", () => {
    store.setProducts(products);
    expect(store.products.length).toBe(11);
    store.filterProducts(["Text Editors"]);
    expect(store.filteredPoducts.length).toBe(1);
    store.filterProducts(["Text-Editors"]);
    expect(store.filteredPoducts.length).toBe(0);
  });

  it("combines filter and search products properly", () => {
    store.setProducts(products);
    expect(store.products.length).toBe(11);
    store.filterProducts(["Daily Business"]);
    expect(store.filteredPoducts.length).toBe(5);
    store.searchProduct("foxit");
    expect(store.filteredPoducts.length).toBe(2);
  });

  it("clears current product when filters are cleared", () => {
    store.setProducts(products);
    expect(store.products.length).toBe(11);
    store.currentProduct = products[0];
    expect(store.currentProduct).toStrictEqual(products[0]);
    store.filterProducts([]);
    expect(store.currentProduct).toStrictEqual({});
  });
});
