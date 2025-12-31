import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import AuthPage from './pages/AuthPage';
import AdminDashboard from './pages/AdminDashboard';
import UniversityDashboard from './pages/UniversityDashboard';
import StudentDashboard from './pages/StudentDashboard';
import ProgramsDashboard from './pages/ProgramsDashboard';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        } />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/forgot-password" element={<AuthPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/university-dashboard" element={<UniversityDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/programs" element={<ProgramsDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
