import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default function ProductCard({ product }: any) {
  let { Title, productPic, Description, price } = product.fields;
  return (
    <article>
      <Card className="max-w-md rounded-2xl shadow-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{Title}</CardTitle>

          <span className="text-lg font-semibold text-green-600">${price}</span>
        </CardHeader>
        {/* <Image /> */}
        <CardContent className="text-muted-foreground">
          {documentToReactComponents(Description)}
        </CardContent>
      </Card>
    </article>
  );
}
