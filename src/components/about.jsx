import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <meta charset="UTF-8"></meta>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Hi there!</h2>
                    <p>I am a rising senior at University of California, Berkeley studying Data Science with an emphasis in Urban Studies. 
                      I am interested in software engineering, predictive data science, and decision modeling. 
                      I am passionate about digital health, assistive technology, transportation systems, and 
                      tech for social good. 
                    </p>
                    <p>I am drawn to works that leverage technology to create positive impact on lives.
                    One of the works that inspires me the most
                    is an app called Be My Eyes that helps low-vision people by connecting them with sighted 
                    volunteers for visual assistance through a live video call. I too hope to solve problems with innovations. &#128516;</p>
                    <p>Currently I am working on expanding my experiences in software engineering. 
                      Feel free to reach out if you have any advice, questions, or simply want to chat!
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
