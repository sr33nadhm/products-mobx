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

class ProductStore {
  products: Product[] = [];
  currentProduct: Product = {};
  filteredPoducts: Product[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentProduct(product: Product) {
    this.currentProduct = product;
  }

  filterProducts(filters: string[]) {
    this.filteredPoducts = this.products.filter((item) => {
      return item.category && filters.includes(item.category);
    });
    if (this.filteredPoducts.length < 1) {
      this.currentProduct = {};
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
  }
}

const store = new ProductStore();

export default store;
