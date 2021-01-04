import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import Introduction from './components/Introduction'
import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Timeline from './components/Timeline'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            <Projects></Projects>
            <Blog></Blog>
            <Timeline></Timeline>
          </div>
      	</div>
      </div>
    );
  }
}

export default App;