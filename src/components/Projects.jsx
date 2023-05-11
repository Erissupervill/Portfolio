import React, { Component } from 'react';

export default class Projects extends Component {
  componentDidMount() {
    const progressData = [
      { selector: "#projects1", endValue: 4, speed: 200 },
      { selector: "#projects2", endValue: 3, speed: 200 },
      { selector: "#projects3", endValue: 10, speed: 200 }
    ];

    function animateProgress(progress) {
      const progressValue = document.querySelector(progress.selector);
      if (!progressValue) return; // Exit if element not found

      let startValue = 0;
      let progressInterval = setInterval(() => {
        startValue++;
        progressValue.textContent = `${startValue}`;
        if (startValue === progress.endValue) clearInterval(progressInterval);
      }, progress.speed);
    }

    progressData.forEach(progress => animateProgress(progress));
  }

  render() {
    return (
      <>
        <section id="Projects" className="container section">
          <h1>Projects</h1>
          <div className="projects-container margin-top">
            <div className="projects-flex card">
              <p className="projects-title">Projects</p>
              <p id="projects1" className="projects-count">11</p>
            </div>
            <div className="projects-flex card">
              <p className="projects-title">Clients</p>
              <p id="projects2" className="projects-count">11</p>
            </div>
            <div className="projects-flex card">
              <p className="projects-title">Certificates</p>
              <p id="projects3" className="projects-count">11</p>
            </div>
          </div>
          <div>
            Content
          </div>
        </section>
      </>
    );
  }
}