'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  // State für das aktuelle Hintergrundbild
  const [background, setBackground] = useState('/imgs/jungle.jpg');

  // useEffect für automatischen Hintergrundwechsel
  useEffect(() => {
    const images = ['/imgs/jungle.jpg', '/imgs/sea.jpg']; // Bilderpfade relativ zum public-Ordner
    let index = 0;

    const interval = setInterval(() => {
      // Wechselt das Hintergrundbild alle 5 Sekunden
      index = (index + 1) % images.length;
      setBackground(images[index]);
    }, 5000); // 5000ms = 5 Sekunden

    // Bereinigung des Intervalls bei Komponenten-Demontage
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col bg-gray-100"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'opacity 1s ease-in-out',
      }}
    >
      {/* Hauptbereich */}
      <main className="flex-grow flex items-center justify-center p-10 text-center">
        {/* Durchsichtige Box */}
        <div className="bg-white/40 p-10 rounded-md shadow-lg max-w-md animate-fadeIn backdrop-blur-sm">
          <h2 className="text-4xl font-bold mb-4 text-blue-600 animate-bounce">Willkommen!</h2>
          <p className="text-lg text-gray-700 mb-6">
            Entdecke spannende Reiseziele, Tipps und Abenteuerberichte.
          </p>
          <Link
            href="/login"
            className="inline-block px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-md shadow hover:bg-blue-600 transition duration-300 transform hover:scale-105"
          >
            Zum Login
          </Link>
        </div>
      </main>
    </div>
  );
}
