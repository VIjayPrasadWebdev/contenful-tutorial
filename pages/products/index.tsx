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
    <section>
      {productslist.map((products: any, i: number) => (
        <ProductsList key={i} products={products} />
      ))}
    </section>
  );
}
