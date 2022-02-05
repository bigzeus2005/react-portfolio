import React from 'react';
import image1 from './assets/images/project1.jpg'
import image2 from './assets/images/project2.jpg'
import image3 from './assets/images/project3.jpg'
import image4 from './assets/images/project4.jpg'
import image5 from './assets/images/project5.jpg'
import image6 from './assets/images/project6.jpg'

function Projects() {
  return (
    <div className='container'>
      <div>
        <h3>My Projects</h3>
      </div>

      <div class="row justify-content-center">
        <div class="col"><div className='row col-lg-6'>
          <div className='col-12'>
            <h2>Project 1</h2>
            <img src={image1} alt='project1'></img>
          </div>
        </div>
        </div>
        <div class="col"><div className='row'>
          <div className='col-6'>
            <h2>Project 2</h2>
            <img src={image2} alt='project2'></img>
          </div>
        </div>
        </div>
        <div class="w-100"><div className='row'>
          <div className='col-6'>
            <h2>Project 3</h2>
            <img src={image3} alt='project3'></img>
          </div>
        </div>
        </div>
        <div class="col"><div className='row'>
          <div className='col-6'>
            <h2>Project 4</h2>
            <img src={image4} alt='project4'></img>
          </div>
        </div>
        </div>
        <div class="col"> <div className='row'>
          <div className='col-6'>
            <h2>Project 5</h2>
            <img src={image5} alt='project5'></img>
          </div>
        </div>
        </div>
      </div>
      <div class="col"><div className='row'>
        <div className='col-6'>
          <h2>Project 6</h2>
          <img src={image6} alt='project6'></img>
        </div>
      </div>
      </div>
    </div >
  )
};

export default Projects;