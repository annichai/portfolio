import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/git.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Gitlet</a></h3>
											<span>Created a version-control system that mimics
											some of the basic features of the popular system Git including commit,
											checkout, merge, merge-branch</span>
											<br></br>
											<span>Java</span>
											<br></br>
											<br></br>
											<br></br>
											<span><a href="https://www.flaticon.com/free-icon/git_2111420?term=git&page=1&position=3">image source</a></span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/chess.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Tablut</a></h3>
                                            <span>Recreated a chess-like strategy board game and built an AI agent using the minimax algorithm with alpha-beta pruning to traverse the game state tree.</span>
                                            <br></br>
                                            <span>Java</span>
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            <span><a href="https://www.flaticon.com/free-icon/chess-pieces_2852455?term=chess&page=1&position=59">image source</a></span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/enigma.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Enigma</a></h3>
											<span>Recreated an encryption/decryption tool modeled after enigma machines from WWII in Java</span>
											<br></br>
                                            <span>Java</span>
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            <span><a href="https://www.flaticon.com/free-icon/engineering_3079162?term=gear&page=1&position=26">image source</a></span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/network.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Cell Towers Placement</a></h3>
											<span>Designed and implemented an algorithm for approximately solving an NP-hard problem: designing
                                            a cell tower network which spans the major cities of the United States satisfying special conditions</span>
											<br></br>
											<span>Python</span>
											<br></br>
											<br></br>
											<span><a href="https://www.flaticon.com/free-icon/neural_2103633">image source</a></span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/forest.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Random Forests</a></h3>
											<span>Implemented model (ensembles of decision trees) from scratch; preprocessed data and trained
                                            spam classification, housing price predictor, NBA player performance predictor</span>
                                            <br></br>
                                            <span>Python, Machine Learning</span>
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            <span><a href="https://www.flaticon.com/free-icon/forest_2990707?term=forests&page=1&position=48">image source</a></span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/dashboard.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Internship Project</a></h3>
											<span>Develop algorithms and a live analytics dashboard to evaluate predictive clinical operations models;
											identify potential factors in disparities between predictions and outcomes using PCA and build a model that predicts model prediction accuracy</span>
											<br></br>
											<span>SQL, python, Tableau, Statistical Methods, Machine Learning, Principle Component Analysis</span>
                                            <span><a href="https://www.flaticon.com/free-icon/home_1035688">image source</a></span>
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
