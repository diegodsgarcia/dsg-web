import React, { Component } from 'react'
import Section from './model/Section';
import Header from './components/header/Header'
import Main from './components/main/Main'
import About from './components/about/About'
import Works from './components/works/Works'
import Contact from './components/contact/Contact'
import './App.scss';

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentSection: null,
      stackSection: []
    };
    this.sections = [];
  }

  render() {
    return (
      <div className='App'>
        <Main />
        <Header />
        <About sections={this.state} />
        <Works />
        <Contact />
      </div>
    );
  }

  componentDidMount() {
    this.scrollEvent();
  }

  findSections() {
    let sections = Array.from(document.querySelectorAll('.section'));
    this.sections = sections.map(element => new Section(element));
  }

  scrollEvent() {
    document.addEventListener('scroll', () => {
      this.findSections();
      const scrollTop = window.scrollY;

      const foundSection = this.sections.find(section => {
        const elementTop = section.offsetTop;
        const elementBottom = elementTop + section.offsetHeight;

        if (scrollTop >= elementTop && scrollTop < elementBottom) {
          return section;
        }

        return false;
      });

      if (!this.state.currentSection) {
        this.setState({ currentSection: foundSection});
        this.state.stackSection.push(foundSection);
        return;
      }

      if (this.state.currentSection.className !== foundSection.className) {
        this.setState({ currentSection: foundSection});

        if (!this.state.stackSection.find(section => section.className === foundSection.className)) {
          this.state.stackSection.push(foundSection);
        }
      }
    })
  }
}

export default App
