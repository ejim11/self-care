/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import ProductDetail from "@/components/ProductDetail";
import React, { Usable } from "react";

export default function Product({
  params,
}: Usable<{ productSlug: string }> | any) {
  const slug: { productSlug: string } = React.use(params);

  return <ProductDetail productSlug={slug.productSlug} />;
}
