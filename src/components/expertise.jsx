import React, { Component } from 'react'

export default class Expertise extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="expertise">
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my Skills</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Data Science</h3>
                    <p>I work in computational neuroscience research, specifically with machine learning in genome-wide association studies</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
               <div className="services color-3">
                  <span className="icon">
                     <i className="icon-chart-line" />
                  </span>
                  <div className="desc">
                        <h3>Data Analytics</h3>
                        <p>I am pursuing my internship with Predictive Analytics team at Genentech and working with tools SQL, python, Tableau, etc.</p>
                     </div>
               </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-device-laptop" />
                </span>
                <div className="desc">
                    <h3>Programming</h3>
                    <p>I have fundamentals in data structures and algorithms, mainly in python and java. Currently working to build more hands-on experiences in web development!</p>
                </div>
                </div>
            </div>
            {}
            </div>
        </div>
        </section>
      </div>
    )
  }
}