/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductDetail from "@/components/ProductDetail";
import products, { Product } from "@/data/products";
import { Metadata } from "next";
import React, { Usable } from "react";

type Params = Promise<{ productSlug: string }>;

// Utility function to fetch product data
function fetchProduct(productSlug: string) {
  const product: Product = products.filter(
    (product: Product) => product.slug.toLowerCase() === productSlug
  )[0];

  return product;
}

// Async function to generate dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { productSlug } = await params;
  // Fetch product details
  const product = fetchProduct(productSlug);

  return {
    title: `AI Power Bundle | ${product.title}`,
    description: `${product.title} - ${product.details[0]}`,
  };
}

export default function ProductDetailPage({
  params,
}: Usable<{ productSlug: string }> | any) {
  const slug: { productSlug: string } = React.use(params);

  return <ProductDetail productSlug={slug.productSlug} />;
}
