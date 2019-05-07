import React, { Component } from 'react';
import Section from './model/Section';
import Header from './components/header/Header';
import Main from './components/main/Main';
import About from './components/about/About';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import './App.scss';

type AppState = {
  currentSection: Section | null,
  stackSection: Section[]
}

class App extends Component<any, AppState> {

  sections: Section[] = [];

  constructor(props) {
    super(props);

    this.state = {
      currentSection: null,
      stackSection: [],
    };
  }

  render() {
    return (
      <div className='App'>
        <Main />
        <Header currentSection={this.state.currentSection} />
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
    this.sections = sections.map((element, i) => new Section(element as HTMLElement, this.checkIfIsDarkSection(i) ));
  }

  checkIfIsDarkSection(value: number): boolean {
    return !Boolean(value & 1)
  }

  scrollEvent() {
    document.addEventListener('scroll', () => {
      this.findSections();
      const scrollTop = window.scrollY;

      const foundSection = this.sections.find((section: any) => {
        const elementTop = section.offsetTop;
        const elementBottom = elementTop + section.offsetHeight;

        if (scrollTop >= elementTop && scrollTop < elementBottom) {
          return section;
        }

        return false;
      });

      if (!foundSection) {
        return false;
      }

      if (!this.state.currentSection) {
        this.state.stackSection.push(foundSection);
        this.setState({ currentSection: foundSection});
        return;
      }

      if (this.state.currentSection.className !== foundSection.className) {
        if (!this.state.stackSection.find(section => section.className === foundSection.className)) {
          this.state.stackSection.push(foundSection);
        }
  
        this.setState({ 
          currentSection: foundSection, 
          stackSection: this.state.stackSection,
        });
      }
    })
  }
}

export default App
