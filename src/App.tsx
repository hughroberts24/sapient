import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Work from './pages/Work';

function App() {
  return (
    <Router>
      <Helmet>
        {/* Set the page title and description */}
        <title>Sapient Development</title>
        <meta name="description" content="Sapient Development" />

        {/* Ensure the favicon is correctly referenced */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        {/* Open Graph metadata */}
        <meta property="og:title" content="Sapient Development" />
        <meta property="og:description" content="Sapient Development" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://sapientdev.com" />

        {/* Twitter Card metadata */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="bg-black text-white min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
