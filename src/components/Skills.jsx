import React, { Component } from 'react'

export default class Skills extends Component {
  componentDidMount() {
    const progressData = [
      { circularProgress: document.querySelector("#design1"), progressValue: document.querySelector("#design1 .progress-value"), endValue: 100, speed: 10 },
      { circularProgress: document.querySelector("#design2"), progressValue: document.querySelector("#design2 .progress-value"), endValue: 80, speed: 10 },
      { circularProgress: document.querySelector("#design3"), progressValue: document.querySelector("#design3 .progress-value"), endValue: 85, speed: 10 },
      { circularProgress: document.querySelector("#design4"), progressValue: document.querySelector("#design4 .progress-value"), endValue: 90, speed: 10 },
      { circularProgress: document.querySelector("#design5"), progressValue: document.querySelector("#design5 .progress-value"), endValue: 90, speed: 10 },
      { circularProgress: document.querySelector("#design6"), progressValue: document.querySelector("#design6 .progress-value"), endValue: 70, speed: 10 },
    ];
  
    function animateProgress(progress) {
      let startValue = 0;
      let progressInterval = setInterval(() => {
        startValue++;
        progress.progressValue.textContent = `${startValue}%`;
        progress.circularProgress.style.background = `conic-gradient(#7d2ae8 ${startValue * 3.6}deg, #ededed 0deg)`;
        if (startValue === progress.endValue) clearInterval(progressInterval);
      }, progress.speed);
    }
  
    progressData.forEach(progress => animateProgress(progress));
  }
  
  render() {
    return (
      <section id="skills" className='container section'>
        <h1>Skills</h1>
        <div className='skills-container margin-top'>
            <div  className='container-progress' >
          <div id="design1" className="circular-progress">
            <span className="progress-value">0%</span>
          </div>
          <span className="text">HTML</span>
          </div >
          <div  className='container-progress'>
          <div id="design2" className="circular-progress">
            <span className="progress-value">0%</span>
          </div>
          <span className="text">CSS</span>
        </div>

        <div  className='container-progress' >
          <div id="design3" className="circular-progress">
            <span className="progress-value">0%</span>
          </div>
          <span className="text">React</span>
        </div>
        <div  className='container-progress' >
          <div id="design4" className="circular-progress">
            <span className="progress-value">0%</span>
          </div>
          <span className="text">CodeIgniter</span>
        </div>
        <div className='container-progress'>
          <div id="design5" className="circular-progress">
            <span className="progress-value">0%</span>
          </div>
          <span className="text">PHP</span>
        </div>
        <div className='container-progress'>
          <div id="design6" className="circular-progress">
            <span className="progress-value">0%</span>
          </div>
          <span className="text">Angular</span>
        </div>
        </div>
        
      </section>
    );
  }
}