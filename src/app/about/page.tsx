'use client';

import './about.css'; // Importiere die CSS-Datei

export default function AboutMe() {
  return (
    <div className="about-div-container">
      {/* Parallax-Bereich */}
      <div className="about-parallax"></div>

      {/* Textbereich */}
      <div className="about-text-container">
        {/* Überschrift */}
        <h1 className="about-title">Über mich</h1>

        {/* Textabschnitt */}
        <p className="about-text">
          Hallo! Ich bin <strong>Daniel</strong>, der Reiseenthusiast hinter diesem Blog. 
          Ich studiere <strong>Wirtschaftsinformatik</strong> im letzten Semester und reise für mein Leben gerne.
          In meiner freizeit programmiere ich gerne und hab mir gedacht ich tue mal was gutes und erstelle eine Webseite , damit andere von meinen Erfahrungen profitieren können.
          Ich werde hier meine Reiseerfahrungen teilen und evlt Tipps, Tricks, und potentielle Routen für das jeweilige Land teilen.  
        </p>

        <p className="about-text">
          <a
            href="/afrika/marokko" 
            className="text-blue-600 hover:text-blue-800 underline ml-1"
          >
            Hier mein letzer Trip nach Marokko
          </a>.
        </p>

        <p className="about-text">
          Wenn ich einigen wenigen Besuchern mit meinen Berichten und Erfahrungen weiterhelfen konnte, 
          hat sich der Aufwand schon gelohnt. Ich würde mich über Kommentare freuen. 
          Bei Fragen zu einigen Ländern könnt ihr mich gerne anschreiben.
        </p>

        <p className="about-text">
         Falls jmd spannende Projekte hat bei denen ich mitwirken kann, bin ich gerne dabei.
          
          <div>
          <span className="italic"> Do not hesitate to contact me.</span>
          </div>
         
        </p>
      </div>
    </div>
  );
}
