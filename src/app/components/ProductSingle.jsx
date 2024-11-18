"use client";

import Image from "next/image";
import { useState } from "react";
import Gallery from "./Gallery";
import Accordion from "./Accordion";
import ReviewContainer from "./ReviewContainer";

const ProductSingle = ({ product }) => {
  const { title, brand, thumbnail, images, description, price, stock, dimensions, warrantyInformation, shippingInformation, sku } = product;
  return (
    <>
      <Gallery thumbnail={thumbnail} images={images} title={title} />
      <p className="pb-3xs text-medium">{brand}</p>
      <p className="text-subtitle">{title}</p>
      <p className="max-w-[55ch] my-xs">{description}</p>
      <Accordion dimensions={dimensions} warrantyInformation={warrantyInformation} shippingInformation={shippingInformation} sku={sku} />
    </>
  );
};

export default ProductSingle;