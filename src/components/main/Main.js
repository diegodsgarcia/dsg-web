import React, { Component } from 'react'
import { TimelineMax, Power0 } from 'gsap';
import './Main.scss'

class Main extends Component {
  constructor() {
    super();
    this.tl = new TimelineMax({ paused: true });
    this.title = null;
  }

  render() {
    return (
      <section className='section main'>
      <h1 className='main__dsg' ref={el => this.title = el}>
        DSG
      </h1>
      <p className='main__scroll'>scroll down</p>
    </section>
    );
  }

  componentDidMount() {
    this.title.innerHTML = this.title.textContent.trim().replace(/(\S+?)/g, '<span>$1</span>');
    const spans = this.title.querySelectorAll('span');

    const cursor = new TimelineMax({ repeat: -1 }).to(this.title, .5, { borderRightColor: 'transparent' }, Power0.easeNone ).yoyo(true)

    this.tl
      .staggerFromTo(spans, .3, { display: 'none'}, { display: 'inline' }, .2)
      .add(cursor);

    this.tl.play();
  }
}

export default Main
