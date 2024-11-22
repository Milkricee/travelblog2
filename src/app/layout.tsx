'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { useState, useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currentBackground, setCurrentBackground] = useState("/imgs/jungle.jpg");

  useEffect(() => {
    const images = ["/imgs/jungle.jpg", "/imgs/sea.jpg"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setCurrentBackground(images[index]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <title>Travelblog</title>
      </head>
      <body
        className="flex flex-col min-h-screen text-gray-800 bg-transition"
        style={{
          backgroundImage: `url(${currentBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
