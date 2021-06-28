import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Hi there!</h2>
                    <p>I am a third-year student at University of California, Berkeley, studying Applied Math and Data Science with a minor in Computer Science.</p>
                    <p> I am interested in the fields of business intelligence, transportation systems, and biotech. </p>
                    <p>I am drawn to works that leverage technology to create positive impact on lives.
                    One of the works that inspires me the most
                    is an app called Be My Eyes that helps low-vision people by connecting them with sighted volunteers for visual assistance through a live video call.
                    Another inspiration is related to digital safety.
                    I learned that the development of computer vision and machine learning are not only used to automate the process of inappropriate image detection, but are also crucial in protecting the mental health of content moderators.
                    I too hope to solve problems like such with innovations :)
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
