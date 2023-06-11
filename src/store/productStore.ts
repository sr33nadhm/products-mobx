import { makeAutoObservable } from "mobx";

export type Product = {
  productName?: string;
  tags?: string[];
  category?: string;
  manufacturerUrl?: string;
  description?: string[];
  option1?: string | null;
  option2?: string | null;
};

export type Category = {
  id: number;
  checked: boolean;
  category: string;
};

class ProductStore {
  products: Product[] = [];
  currentProduct: Product = {};
  filteredPoducts: Product[] = [];
  categories: Category[] = [
    { category: "Software Development", id: 1, checked: false },
    { category: "Daily Business", id: 2, checked: false },
    { category: "Graphic Editors", id: 3, checked: false },
    { category: "Text Editors", id: 4, checked: false },
    { category: "Management Tools", id: 5, checked: false },
  ];
  filters: string[] = [];
  keyword: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setKeyword(keyword: string) {
    this.keyword = keyword;
  }

  setFilters(filters: string[]) {
    this.filters = filters;
  }

  setCategories(categories: Category[]) {
    this.categories = categories;
  }

  setProducts(products: Product[]) {
    this.products = products;
    this.filteredPoducts = products;
  }

  setCurrentProduct(product: Product) {
    this.currentProduct = product;
  }

  resetProducts() {
    this.filteredPoducts = this.products;
  }

  handleFilters(index: number) {
    let newCategories = [...this.categories];
    let value = newCategories[index].checked;
    newCategories[index].checked = !value;
    this.setCategories(newCategories);
    var newFilters: string[] = [...this.filters];
    if (value === true) {
      // remove the filter from filters, already selected
      newFilters = newFilters.filter((item) => {
        return newCategories[index].category !== item;
      });
    } else {
      // add the filter to filters, not selected
      newFilters.push(newCategories[index].category);
    }
    this.setFilters(newFilters);
    this.filterProducts(newFilters);
    this.setKeyword("");
  }

  filterProducts(filters: string[]) {
    this.filteredPoducts = this.filteredPoducts.filter((item) => {
      return item.category && filters.includes(item.category);
    });
    if (this.filteredPoducts.length < 1) {
      this.currentProduct = {};
    }
    if (this.filters.length < 1 && this.keyword.length < 1) {
      this.resetProducts();
    }
  }

  searchProduct(keyword: string) {
    this.filteredPoducts = this.filteredPoducts.filter((item) => {
      return (
        (item.category && item.category.toLowerCase().match(keyword)) ||
        (item.productName && item.productName.toLowerCase().match(keyword))
      );
    });
    if (this.filteredPoducts.length < 1) {
      this.currentProduct = {};
    }
  }

  searchFromFullProducts(keyword: string) {
    this.filteredPoducts = this.products.filter((item) => {
      return (
        (item.category && item.category.toLowerCase().match(keyword)) ||
        (item.productName && item.productName.toLowerCase().match(keyword))
      );
    });
    if (this.filteredPoducts.length < 1) {
      this.currentProduct = {};
    }
    if (keyword.length < 1) {
      this.resetProducts();
    }
  }
}

const store = new ProductStore();

export default store;
