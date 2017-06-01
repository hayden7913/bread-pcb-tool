import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

import { projectsUrl } from 'config/endpointUrls';
import './top-navbar-styles/TopNavbarSaveButton.css';

export class SaveButton extends Component {
  saveProject() {
    const {
      x,
      y,
      width,
      height,
      id,
      modules,
      projectName,
      thumbnail,
      topLeftAnchorX,
      topLeftAnchorY,
    } = this.props;

    const updatedModules = modules.map((module) => {
      const x = module.x - topLeftAnchorX;
      const y = module.y - topLeftAnchorY;
      return Object.assign({}, module, { x, y });
    });

    const updatedProject = {
      projectName,
      boardSpecs: {
        width,
        height,
        thumbnail,
        x: x + topLeftAnchorX,
        y: y + topLeftAnchorY,
      },
      modules: updatedModules,
    };

    const url = `${projectsUrl}/${id}`;
    fetch(url, {
      method: 'put',
      body: JSON.stringify(updatedProject),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .catch((err) => {
      throw new Error(err);
    });
  }

  handleClick() {
    const updateThenSave = new Promise((resolve, reject) => {
      this.props.updateThumbnail();
      resolve();
    });

    updateThenSave.then(() => {
      this.saveProject();
    });

    this.props.updateLastSaved();
    this.props.recordSavedChanges();
  }

  render() {
    const style = {
      marginBottom: '13px',
    };
    return (
      <button className="save-button" style={style} onClick={this.handleClick.bind(this)}>
        <FontAwesome name="fa-cloud" className="fa-cloud" />
        <span>Save</span>
      </button>
    );
  }
}

const mapStateToProps = state => ({
  width: state.boardSpecs.width,
  height: state.boardSpecs.height,
  x: state.boardSpecs.x,
  y: state.boardSpecs.y,
  thumbnail: state.boardSpecs.thumbnail,
  topLeftAnchorX: state.anchorPositions.topLeft.x,
  topLeftAnchorY: state.anchorPositions.topLeft.y,
  modules: state.currentProjectModules.present,
  projectName: state.currentProjectInfo.name,
  id: state.currentProjectInfo.id,
  projects: state.projects.items,
});

export default connect(mapStateToProps)(SaveButton);
