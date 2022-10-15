export const fetchProducts = async () => {
  let products = await fetch("products.json");
  return products.json();
};
