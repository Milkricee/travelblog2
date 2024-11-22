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
          Schon seit meiner Jugend fasziniert mich die Schönheit unserer Welt. Ob es das Erkunden von versteckten Pfaden, 
          das Genießen von lokalen Spezialitäten oder das Eintauchen in neue Kulturen ist – Reisen gibt mir das Gefühl 
          von Freiheit und Inspiration.
        </p>

        <p className="about-text">
          Ich lade dich ein, gemeinsam mit mir die schönsten Orte der Erde zu entdecken und Abenteuer zu erleben! 
          Hier geht&apos;s zu meinem letzten Trip nach 
          <a 
            href="/afrika/marokko" 
            className="text-blue-600 hover:text-blue-800 underline ml-1"
          >
            Marokko
          </a>.
        </p>

        <p className="about-text">
          Diese Website habe ich zum Üben und rein zum Spaß erstellt. 
          Wenn ich einigen wenigen Besuchern mit meinen Berichten und Erfahrungen weiterhelfen konnte, 
          hat sich der Aufwand schon gelohnt. Ich würde mich über Kommentare freuen. 
          Bei Fragen zu einigen Ländern könnt ihr mich gerne anschreiben.
        </p>

        <p className="about-text">
          Außerdem studiere ich aktuell <strong>Wirtschaftsinformatik</strong> im letzten Semester 
          und freue mich, wenn ich bei spannenden Projekten mitwirken kann. 
          <p> 
          <span className="italic">Do not hesitate to contact me.</span>
          </p>
        </p>
      </div>
    </div>
  );
}
