import React, { Component, Children } from 'react'
import { TimelineMax } from 'gsap'

type TypingProps = {
  play: boolean,
  element?,
  children: any
}

class Typing extends Component<TypingProps> {
  element;
  tl: TimelineMax;

  constructor(props) {
    super(props);
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
    const text = this.props.children.toString().trim().replace(/(\S+?)/g, '<span>$1</span>');
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
