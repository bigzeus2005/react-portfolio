import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />
    }
    if (currentPage === 'Projects') {
      return <Projects />
    }
    return <Contact />
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  )
};

