import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Experiences</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Predictive Analytics Intern, Research & Development, Genentech <span>May 2020 - Present</span></h2>
                        <p>I recently have joined Genentech as an intern on the Predictive Analytics team. My main project has been creating a live performance dashboard which enables the team to evaluate their predictive models with actual data.
                        My secondary project entails exploratory data analysis using principal component analysis and feature engineering to find the factors behind disparity in models vs real life.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Neuroscience Research Assistant, UCSF Neuroscape <span>June 2020 - Present</span></h2>
                        <p>I am doing research in computational and clinical neuroscience under Professor Abbasi at UCSF.
                        My current project focuses on developing models and algorithms based on principals in statistics and machine learning to understand the
                        patterns in genomics and gene expression data that predicts the multiple sclerosis disease processes</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Data Consultant, Research IT, UC Berkeley <span>Oct 2019 - Present</span></h2>
                        <p>I provide consulting and guidance in data science and programming
                           to help undergrad and grad researchers overcome technical hurdles. I assisted in UC Berkeley’s online Foundations of Data Science Professional Certificate Program on EdX by guiding
                           students on discussion forum. I also created consulting metrics analysis visualizations for Research IT's grant proposal.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
