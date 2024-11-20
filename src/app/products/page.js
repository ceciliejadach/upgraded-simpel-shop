import App from "../components/App";

export default async function Page() {
  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
  };

  const fecthCategories = async () => {
    const response = await fetch("https://dummyjson.com/products/categories");
    const data = await response.json();
    return data;
  };

  const products = await fetchProducts();
  const categories = await fecthCategories();

  return (
    <>
      <App initialProducts={products} categories={categories} />
    </>
  );
}
