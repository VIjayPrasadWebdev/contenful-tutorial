import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
export default function ProductsList({ products }: any) {
  let {
    Title,
    productPic: {
      sys: { id },
    },
    link,
  } = products.fields;
  return (
    <article>
      <Link href={`/products/${link}`}>
        <Card>
          <CardHeader>
            <CardTitle>{Title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Image src={``} alt={Title} height={500} width={500} />
          </CardContent>
        </Card>
      </Link>
    </article>
  );
}
