import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

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

