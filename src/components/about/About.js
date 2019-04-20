import React, { Component } from 'react';
import { TimelineMax } from 'gsap';
import Typing from '../typing/Typing';
import './About.scss';

class About extends Component {
  constructor(props) {
    super();
    this.tl = new TimelineMax({ paused: true });
    this.elementRef = null;
  }

  render() {
    return (
      <section className='section about'>
      <div className='container'>
        <h1 className='title'>
          About
        </h1>
        <Typing>
          My name is Diego Garcia, I'm a web developer for 5 year ago. I love all about Javascript and Front-end My main robe is skateboarding and play
          Path of Exile.
        </Typing>
      </div>
    </section>
    )
  }

  componentDidMount() {
  }

}

export default About
