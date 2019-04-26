import React, { Component } from 'react';
import { ScrollToPlugin } from 'gsap/all';
import Section from './model/Section';
import Header from './components/header/Header';
import Main from './components/main/Main';
import About from './components/about/About';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import './App.scss';

// eslint-disable-next-line no-unused-vars
const plugins = [ScrollToPlugin];

class App extends Component {

  state = {
    currentSection: null,
    stackSection: []
  };

  sections = [];

  render() {
    return (
      <div className='App'>
        <Main />
        <Header />
        <About sections={this.state.stackSection} />
        <Works sections={this.state.stackSection} />
        <Contact sections={this.state.stackSection} />
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
        
        this.state.stackSection.push(foundSection);
        this.setState({ currentSection: foundSection});
        return;
      }

      if (this.state.currentSection.className !== foundSection.className) {
        if (!this.state.stackSection.find(section => section.className === foundSection.className)) {
          this.state.stackSection.push(foundSection);
        }
        this.setState({ currentSection: foundSection});
      }
    })
  }
}

export default App
