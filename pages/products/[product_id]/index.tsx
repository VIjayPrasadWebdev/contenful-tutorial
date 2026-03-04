import ProductCard from "@/components/general/product-card";
import { client } from "@/lib/contentful";
import React from "react";

export let getStaticPaths = async () => {
  let data = await client.getEntries({
    content_type: "product",
  });
  let paths = data.items.map((data) => {
    return {
      params: {
        product_id: data.fields.link,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export let getStaticProps = async ({ params }: any) => {
  let data = await client.getEntries({
    content_type: "product",
    "fields.link": params.product_id,
  });
  return {
    props: {
      product: data.items[0],
    },
  };
};

export default function Product({ product }: any) {
  console.log("Single Product", product);

  return (
    <section className="h-screen flex items-center justify-center">
      <ProductCard product={product} />
    </section>
  );
}
