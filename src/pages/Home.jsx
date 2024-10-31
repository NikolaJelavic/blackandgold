import React, { useRef, useState, useEffect } from "react";
import { SocialIcon } from 'react-social-icons';
import '../App.css';

const HomePage = () => {
  const introSectionRef = useRef(null); 
  const [showTopButton, setShowTopButton] = useState(false);

  // Scroll function for "Begin Transformation" button
  const scrollToNextSection = () => {
    if (introSectionRef.current) {
      introSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll-to-top function for the "Back to Top" button
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show "Back to Top" button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-80"></div>
        <div className="relative z-10 text-center">
          <img
            src={`${process.env.PUBLIC_URL}/logo.jpg`}
            alt="Black and Gold Logo"
            className="mx-auto mb-8 w-full max-w-md lg:max-w-lg object-cover"
          />
          <h1 className="text-6xl font-extrabold shiny-text mb-4">
            BLACK AND GOLD
          </h1>
          <p className="text-lg font-semibold text-gray-300">
            Personal Trainer & Präventionsberater
          </p>
          <p className="mt-4 text-xl text-gray-400">
            Maximieren Sie Ihr Potenzial. Heben Sie Ihre Fitness auf ein neues Niveau.
          </p>
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
        ref={introSectionRef}
        className="py-16 px-8 bg-gray-900 text-center"
      >
        <h2 className="text-4xl font-bold text-gold mb-6">
          Warum Black and Gold wählen?
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Wir bieten personalisiertes Fitnesstraining, das auf Ihre individuellen Ziele abgestimmt ist, sei es Gewichtsabnahme, Muskelaufbau oder allgemeines Wohlbefinden.
        </p>
      </section>

      {/* Services Section */}
<section className="py-16 px-4 md:px-8 bg-black text-center">
  <h2 className="text-4xl font-bold text-gold mb-12">Unsere Leistungen</h2>
  <div className="flex flex-wrap justify-center gap-8">
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <h3 className="text-2xl font-semibold text-gold mb-4">Personal Trainer</h3>
      <p className="text-gray-400">
        Individuell angepasste Trainingspläne basierend auf Ihren Fitnesszielen.
      </p>
    </div>
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <h3 className="text-2xl font-semibold text-gold mb-4">Gesundheitstrainer & Präventionsberater</h3>
      <p className="text-gray-400">
        Präventionstraining zur Verbesserung Ihrer Lebensqualität und zur Vermeidung von Gesundheitsrisiken.
      </p>
    </div>
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <h3 className="text-2xl font-semibold text-gold mb-4">Ernährungsberater</h3>
      <p className="text-gray-400">
        Ernährungsberatung zur Ergänzung Ihres Fitnessplans.
      </p>
    </div>
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <h3 className="text-2xl font-semibold text-gold mb-4">Kinder- und Jugendtrainer</h3>
      <p className="text-gray-400">
        Spezielles Training für Kinder und Jugendliche.
      </p>
    </div>
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <h3 className="text-2xl font-semibold text-gold mb-4">Boxkurse</h3>
      <p className="text-gray-400">
        Wir bieten auch Boxkurse an, die für alle Leistungslevels geeignet sind und sowohl Fitness als auch Technik fördern.
      </p>
    </div>
  </div>
</section>



      {/* Footer Section */}
      <footer className="bg-gray-900 py-8">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gold mb-4">Kontaktieren Sie uns</h3>
          <div className="text-center">
            <p className="text-gray-400 mb-2">
              <SocialIcon network="whatsapp" style={{ height: 35, width: 35, cursor: 'default' }} /> 0176/47549199 
            </p>
            <p className="text-gray-400 mb-2">
              <SocialIcon network="email" style={{ height: 35, width: 35, cursor: 'default', color: 'green' }} /> blackundgold@outlook.com
            </p>
            <p className="text-gray-400" style={{ fontSize: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="green"
                style={{ marginRight: '8px' }}
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 4.78 5.47 11.54 6.45 12.7a1 1 0 0 0 1.1 0C13.53 20.54 19 13.78 19 9c0-3.87-3.13-7-7-7zm0 15c-1.82-2.3-5-6.46-5-8 0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.54-3.18 5.7-5 8zm0-11a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
              </svg>
              <span style={{ fontSize: '16px' }}>Standort: Berlin</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gold text-black rounded-full shadow-lg hover:bg-gold-dark flex items-center justify-center"
          style={{ width: '60px', height: '60px' }} // Adjust size as needed
          aria-label="Back to Top"
        >
          <span style={{ fontSize: '35px', fontWeight: '400' }}>↑</span> {/* Increased font size for the arrow */}
        </button>
      )}
    </div>
  );
};

export default HomePage;
