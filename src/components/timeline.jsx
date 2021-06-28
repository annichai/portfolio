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
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineering Intern, Capital One <span>June 2021 - Present</span></h2>
                        <p>Currently working on the backend systems on Capital One's core modernization team using Cassandra, Scala, AWS S3, Docker and Git.
                          Learning a ton!
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>AR/VR Intern, Genentech <span>Sep 2020 - May 2021</span></h2>
                        <p>Shortly after my summer internship with Genentech ended, I was invited to work on a project
                          involving AR/VR technology on a different team. I took a semester off school. In those 9 months, 
                          I helped developed aforementioned AR proof-of-concept to streamline pharmaceutical warehouse picking 
                          operations.</p>
                        <p>I engaged and collaborated with 10+ software and hardware vendors in the enterprise Augmented Reality 
                          space to design a solution involving AR technology, radio frequency ring scanner, and single sign-on.
                          The solution is currently undergoing field test.</p>
                          
                        <p>Towards the end of my internship, I came across a project which intended to aid internal data analysts,
                          data scientist, business decision makers, and casual users to find the data visualization tool that
                          would best fit their needs. I suggested to build a custom recommender app to provide more personalized 
                          recommendations based on custom criteria, replacing the original design of a decision flowchart. 
                          In the end I designed, developed and deployed this personalized tool recommender app with the R shiny framework
                          and Jenkins</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Predictive Analytics Intern, Research & Development, Genentech <span>May 2020 - August 2020</span></h2>
                        <p>During my first internship in the industry, I built a real-time analytics dashboard and automated analysis pipeline 
                          to refine accuracy of predictive trial enrollment models in clinical operations. The dashboard was adopted as a permanent in-house tool 
                          used to reveal insights for 30,000+ global sites involving thousands of diseases and hundred-thousands of patients</p>
                        <p>Tools: Python, SQL, ETL pipeline, Tableau, AWS redshift, statistical analysis</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Neuroscience Research Assistant, UCSF Neuroscape <span>June 2020 - August 2020</span></h2>
                        <p>I assisted in computational and clinical neuroscience under Professor Abbasi at UCSF.
                        My project aimed to develop models and algorithms based on principals in statistics and machine learning to understand the
                        patterns in genomics and gene expression data that predicts the multiple sclerosis disease processes. </p>
                        <p>I learned to build and train a regularized sparse autoencoder neural network on 3D gene expression data to generate localized, denoised models of functional regions of the mouse brain
                        I constructed and visualized local correlation networks and mappings to reveal gene co-expression for subregions of the brain
                        This was my first exposure to deep learning tools and my first experience to applying data science to a domain I had no knowledge in.
                        It was a challenging yet amazing learning experience.</p>
                        <p>Tools: Python, TensorFlow, PyTorch, Pandas, Numpy, Scikit-Learn, NetworkX, Matplotlib</p>
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
