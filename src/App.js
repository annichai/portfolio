import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Volunteer from './components/volunteer'
import Education from './components/education'
import Expertise from './components/expertise'
import Coursework from './components/coursework'
import Projects from './components/projects'
import Blog from './components/blog'


class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
					<Education></Education>
					<Coursework></Coursework>
					<Expertise></Expertise>
					<Timeline></Timeline>
					<Projects></Projects>
					<Volunteer></Volunteer>
					<Blog></Blog>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
