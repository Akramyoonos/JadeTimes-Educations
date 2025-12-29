import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import ProgramCategories from './components/ProgramCategories';
import Journey from './components/Journey';
import ExploreCountries from './components/ExploreCountries';
import Scholarships from './components/Scholarships';
import StudentGuides from './components/StudentGuides';
import Footer from './components/Footer';
import AuthPage from './pages/AuthPage';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <main>
              <Hero />
              <TrustedBy />
              <ProgramCategories />
              <Journey />
              <ExploreCountries />
              <Scholarships />
              <StudentGuides />
            </main>
            <Footer />
          </>
        } />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/forgot-password" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
