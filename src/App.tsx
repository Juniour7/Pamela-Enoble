import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PopupModal from './components/PopupModal';
import Accueil from './pages/Accueil';
import Entreprise from './pages/Entreprise';
import Biographie from './pages/Biographie';
import Contact from './pages/Contact';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    localStorage.setItem('hasVisited', 'true');
  };

  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/entreprise" element={<Entreprise />} />
            <Route path="/biographie" element={<Biographie />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
        <PopupModal isOpen={showPopup} onClose={handleClosePopup} />
      </div>
    </Router>
  );
}

export default App;