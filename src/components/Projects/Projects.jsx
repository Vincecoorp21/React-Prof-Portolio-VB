import React from 'react';
import './Projects.css';
import task_tracker from '../../assets/Task_tracker.png';
import routopic from '../../assets/APP_route.png';
import bsocial from '../../assets/social_network.png';
import ecomm from '../../assets/Ecommerce.png';
import news from '../../assets/News_app.png';
import dogapi from '../../assets/dog-api.png';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';

const Projects = () => {
  const lista = [
    {
      id: 1,
      name: 'APP Routes',
      image: routopic,
      tech: [<FaHtml5 />, <FaCss3 />, <FaReact />, <FaNodeJs />],
      url: 'https://main.d3kb3i2flsi28n.amplifyapp.com/',
      git: 'https://github.com/Vincecoorp21/FRONTEND-TRIPULACIONES-MERN',
    },
    {
      id: 2,
      name: 'Task Tracker',
      image: task_tracker,
      tech: [<FaHtml5 />, <FaCss3 />, <FaReact />],
      url: 'https://tasktracker-vincecoorp21.netlify.app/',
      git: 'https://github.com/Vincecoorp21/Task-Tracker-v1',
    },
    {
      id: 3,
      name: 'Social Network',
      image: bsocial,
      tech: [<FaHtml5 />, <FaCss3 />, <FaReact />, <FaNodeJs />],
      url: '',
      git: 'https://github.com/Vincecoorp21/MERN-STACK---Social-Network',
    },
    {
      id: 4,
      name: 'Ecommerce',
      image: ecomm,
      tech: [<FaHtml5 />, <FaCss3 />, <FaReact />, <FaNodeJs />, <FaSass />],
      url: '',
      git: 'https://github.com/Vincecoorp21/frontend-ecommerce-2.0',
    },
    {
      id: 5,
      name: 'News APP',
      image: news,
      tech: [<FaHtml5 />, <FaCss3 />, <FaReact />, <FaSass />],
      url: '',
      git: 'https://github.com/Vincecoorp21/React-News-App-2.0/tree/main',
    },
    {
      id: 6,
      name: "Dog's API",
      image: dogapi,
      tech: [<FaHtml5 />, <FaCss3 />, <FaBootstrap />],
      url: 'https://dogsapi-vincecoorp21.netlify.app/index.html#',
      git: 'https://github.com/Vincecoorp21/Dog-s-Breed-API',
    },
  ];

  return (
    <article>
      <h2 className='table-title project-title' style={{ textAlign: 'center' }}>
        My Projects
      </h2>
      <div className='projects' id='projects'>
        {lista.map(element => {
          return (
            <div className='card2' key={element.id}>
              <img src={element.image} key={element.id} alt='Element'></img>

              <div>
                <h3>{element.name}</h3>
                <div className='tech' key={element.id}>
                  {/* <p>{element.tech[0] === 'html' ? <FaHtml5 /> : 0}</p> */}
                  {/* <p>{element.tech[1]}</p> */}
                  <p>
                    <span className='span-tech tech-icon'>{element.tech}</span>
                  </p>
                  <div className='tech-bottom'>
                    <a href={element.url}>
                      {/* <FaGlobe className='tech-icon' /> */}
                      {element.url !== '' ? (
                        <FaGlobe className='tech-icon' />
                      ) : (
                        ''
                      )}
                    </a>
                    <a href={element.git}>
                      <FaGithub className='tech-icon' />
                    </a>
                    {/* {{element.url !== '' ? <FaGlobe /> : ''}} */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Projects;
