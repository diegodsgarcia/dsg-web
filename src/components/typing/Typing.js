import React, { Component } from 'react'
import { TimelineMax } from 'gsap'

class Typing extends Component {
  constructor(props) {
    super();
    this.tl = new TimelineMax({ paused: true });
    this.element = null;
  }

  render() {
    if (this.props.element) {
      return React.createElement(this.props.element, { class: 'description', ref: (el) => this.element = el }, this.props.children);
    } else {
      return <p ref={el => this.element = el} className='description'>{this.props.children}</p>;
    }
  }

  componentDidMount() {
    const text = this.props.children.trim().replace(/(\S+?)/g, '<span>$1</span>');
    this.element.innerHTML = text;
    const spans = this.element.querySelectorAll('span');

    this.tl.staggerFromTo(spans, .3, { display: 'none' }, { display: 'inline' }, .03);
    
  }

  componentDidUpdate() {
    if (this.props.play) {
      this.tl.play();
    }
  }
}

export default Typing;
