import React from 'react';


function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li className="nav-item">
              <a class="nav-link active" aria-current="page" href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a class="nav-link active" aria-current="page" href="#projects"
                onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a class="nav-link active" aria-current="page" href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navigation;