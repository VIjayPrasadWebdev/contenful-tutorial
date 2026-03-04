import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
export default function ProductsList({ products }: any) {
  let { Title, productPic, link } = products.fields;
  return (
    <Link href={`/products/${link}`}>
      <Card className="hover:scale-105 transition-all hover:transition-all h-full border-0  max-w-md rounded-2xl shadow-md">
        <CardHeader className="h-96 flex items-center justify-center">
          <CardTitle className="text-5xl text-center font-semibold">
            {Title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* <Image src={``} alt={Title} height={500} width={500} /> */}
        </CardContent>
      </Card>
    </Link>
  );
}
