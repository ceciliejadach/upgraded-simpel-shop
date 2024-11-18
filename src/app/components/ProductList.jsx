"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "./ProductCard";

const ProductList = ({ initialProducts, categories }) => {
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (filter !== "all") {
      fetchFilteredProducts(filter);
    } else {
      setProducts(initialProducts);
    }
  }, [filter, initialProducts]);

  async function fetchFilteredProducts(category) {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await response.json();
    setProducts(data.products);
  }
  return (
    <section>
      <div>
        <label htmlFor="categorySelect"></label>
        <select id="categorySelect" onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="all">Alle kategorier</option>
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
