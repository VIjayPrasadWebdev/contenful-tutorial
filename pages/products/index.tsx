import React from "react";
import { client } from "@/lib/contentful";
import ProductsList from "@/components/general/products-list";

export let getStaticProps = async () => {
  let data = await client.getEntries({
    content_type: "product",
  });
  //  console.log("data", data.items);
  return {
    props: {
      productdata: data.items,
    },
  };
};
export default function Products({ productdata }: any) {
  console.log("productdata", productdata);
  let productslist = productdata;
  return (
    <section className="grid h-screen grid-cols-1 gap-2 justify-center align-middle items-center sm:grid-cols-1 lg:grid-cols-3 md-grid-cols-2">
      {productslist.map((products: any, i: number) => (
        <ProductsList key={i} products={products} />
      ))}
    </section>
  );
}
