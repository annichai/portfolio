import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="education">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">education</span>
                    <h2 className="colorlib-heading">Education</h2><img src = "https://brand.berkeley.edu/wp-content/uploads/2016/10/ucbseal_139_540.png" align= "right"  height = "180"/>
                    <p><strong>University of California, Berkeley</strong> August 2018 - May 2022(Expected)</p>
                    <ul>
                      <li>Applied Mathematics, B.A.</li>
                      <li>Data Science, B.A. (emphasis in Industrial and Business Analytics)</li>
                      <li>Computer Science Minor</li>
                    </ul>
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
