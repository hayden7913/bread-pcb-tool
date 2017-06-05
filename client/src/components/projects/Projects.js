import React from 'react';
import Link from 'react-router';

import * as actions from 'actions/indexActions';
import store from 'reduxFiles/store';

import NavDropdown from 'components/NavDropdown';
import ProjectsList from './ProjectsList';
import ProjectsAddButton from './ProjectsAddButton';
import TopNavbar from 'components/top-navbar/TopNavbar';
 
import 'components/top-navbar/top-navbar-styles/TopNavbar.css';
import './projects-styles/floatGrid.css';
import './projects-styles/Projects.css';
import 'components/styles/NavDropdown.css'

export default function Projects(props) {
  return (
    <div>
      <div className="navWide project-navbar">
        <div className="logo-link" onClick={props.handleLinkClick}>
            <img className="logo-image" src="images/logo4.png" alt="" />
            <span className="logo-text">PCB<span className="bold">flow</span></span>
        </div>
        <div className="test"></div>
        {/* <NavDropdown /> */}
      </div>
      <div className="button-bar">
        <div className="row-project">
          <div className="col-wrapper">
            <div>
              <ProjectsAddButton />
            </div>
          </div>
        </div>
      </div>
      <ProjectsList />
    </div>
  );
}

