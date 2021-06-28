import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Anni Chai</a></h1>
              <span className="email"><i className="icon-mail"></i>annichai@berkeley.edu</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Intro</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#education" data-nav-section="education">Education</a></li>
                  <li><a href="#coursework" data-nav-section="coursework">Coursework</a></li>
                  <li><a href="#expertise" data-nav-section="expertise">Skills</a></li>
                  <li><a href="#experiences" data-nav-section="timeline">Experiences</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  {/* <li><a href="#volunteer" data-nav-section="volunteer">Volunteer</a></li> */}
                  <li><a href="#blog" data-nav-section="blog">Recipes</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/anni-chai" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/annichai" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="mailto:annichai@berkeley.edu" target="_blank" rel="noopener noreferrer"><i className="icon-mail"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration
              </small></p>
              <p><small>
                Feel free to connect with me via email or Linkedin!
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
