import React, { Component } from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Works from './components/works/Works'
import Contact from './components/contact/Contact'
import './App.scss';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Header />
        <About />
        <Works />
        <Contact />
      </div>
    );
  }
}

export default App
