"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import "./home.css"; // Importiere die CSS-Datei für die Main Page

export default function Home() {
  const [background, setBackground] = useState('/imgs/jungle.jpg');

  useEffect(() => {
    const images = ['/imgs/jungle.jpg', '/imgs/sea.jpg'];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setBackground(images[index]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <main className="home-main">
        <div className="home-box">
          <h2 className="home-title">Willkommen!</h2>
          <p className="home-text">
            Entdecke spannende Reiseziele, Tipps und Abenteuerberichte.
          </p>
          <Link href="/login" className="home-button">
            Zum Login
          </Link>
        </div>
      </main>
    </div>
  );
}
