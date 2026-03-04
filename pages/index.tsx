import React from "react";
import { DM_Serif_Display } from "next/font/google";

const DMFont = DM_Serif_Display({
  variable: "--font-DMFont",
  weight: "400",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center overflow-hidden">
      <h1 className={`${DMFont.variable} text-8xl text-center font-extrabold`}>
        PRODUCTS
      </h1>
    </main>
  );
}

// SPACE_ID = "n0kyzo4wygi3";
// ACCESS_TOKEN = "tmqjuT1nIjvk-WDZrKPX4jkoMUDhDPkPy1bW_JTA1nU";
