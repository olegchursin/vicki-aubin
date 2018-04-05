import React, { Component } from 'react';
import './css/App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import Nav from './components/Nav'
import Homepage from './components/main/Homepage'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Nav />
            <Route path="/" exact component={Homepage} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
