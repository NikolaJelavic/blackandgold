import React, { useRef } from "react";
// import './App.css'; // Assuming you add the CSS in App.css
import '../App.css';

const HomePage = () => {
  const introSectionRef = useRef(null); // Create a reference for the next section

  // Scroll function
  const scrollToNextSection = () => {
    if (introSectionRef.current) {
      introSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-80"></div>
        <div className="relative z-10 text-center">
          {/* Responsive Image Element */}
          <img
            src={`${process.env.PUBLIC_URL}/logo.jpg`}
            alt="Black and Gold Logo"
            className="mx-auto mb-8 w-full max-w-md lg:max-w-lg object-cover"
          />
          {/* Shiny Text Effect */}
          <h1 className="text-6xl font-extrabold shiny-text mb-4">
            BLACK AND GOLD
          </h1>
          <p className="text-lg font-semibold text-gray-300">
            Personal Trainer & Präventionsberater
          </p>
          <p className="mt-4 text-xl text-gray-400">
            Maximieren Sie Ihr Potenzial. Heben Sie Ihre Fitness auf ein neues Niveau.
          </p>
          {/* Button that scrolls to the next section */}
          <button
            className="mt-8 px-8 py-3 bg-gold text-black font-bold rounded-lg shadow-lg hover:bg-gold-dark"
            onClick={scrollToNextSection}
          >
            Beginnen Sie Ihre Transformation
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section
        ref={introSectionRef} // Reference to scroll to
        className="py-16 px-8 bg-gray-900 text-center"
      >
        <h2 className="text-4xl font-bold text-gold mb-6">
          Warum Black and Gold wählen?
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Wir bieten personalisiertes Fitnesstraining, das auf Ihre individuellen Ziele abgestimmt ist, sei es Gewichtsabnahme, Muskelaufbau oder allgemeines Wohlbefinden. Unsere Experten begleiten Sie bei jedem Schritt auf dem Weg zu Ihrem vollen Potenzial.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-8 bg-black text-center">
        <h2 className="text-4xl font-bold text-gold mb-12">Unsere Leistungen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gold mb-4">
              Personal Trainer
            </h3>
            <p className="text-gray-400">
              Individuell angepasste Trainingspläne basierend auf Ihren Fitnesszielen, Gesundheitszustand und Vorlieben.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gold mb-4">
              Gesundheitstrainer & Präventionsberater
            </h3>
            <p className="text-gray-400">
              Präventionstraining zur Verbesserung Ihrer Lebensqualität und zur Vermeidung von Gesundheitsrisiken.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gold mb-4">
              Ernährungsberater
            </h3>
            <p className="text-gray-400">
              Ernährungsberatung zur Ergänzung Ihres Fitnessplans und zur Optimierung Ihrer Ernährung für bessere Ergebnisse.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gold mb-4">
              Kinder- und Jugendtrainer
            </h3>
            <p className="text-gray-400">
              Spezielles Training für Kinder und Jugendliche, das auf ihre besonderen Entwicklungsbedürfnisse abgestimmt ist, um gesunde Gewohnheiten von klein auf zu fördern.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 py-8">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gold mb-4">Kontaktieren Sie uns</h3>
          <p className="text-gray-400 mb-2">Telefon: (Ihre Telefonnummer)</p>
          <p className="text-gray-400 mb-2">E-Mail: (Ihre E-Mail-Adresse)</p>
          <p className="text-gray-400">Standort: (Ihr Standort)</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
