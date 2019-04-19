import React, { Component } from 'react'
import { TimelineMax } from 'gsap'
import './Menu.scss'

class Menu extends Component {
  constructor() {
    super();
    this.tl = new TimelineMax({ paused: true });
    this.elementRef = null;
  }

  render() {
    return (
      <div className='menu' ref={div => this.elementRef = div} style={{ transform: 'translateX(-100vw)' }}>
        <button className='menu__close' onClick={this.props.close}>
          Close
        </button>
        <ul className='menu__list'>
          <li className='menu__item'>
            <a className='menu__link' href="#about">About</a>
          </li>
          <li className='menu__item'>
            <a className='menu__link' href="#works">Works</a>
          </li>
          <li className='menu__item'>
            <a className='menu__link' href="#works">Contact</a>
          </li>
        </ul>
      </div>
    )
  }

  componentDidMount() {
    this.tl
      .to(this.elementRef, .4, { x: 0 })
      .reversed(true)
      .paused(false)
  }

  componentDidUpdate() {
    if (this.props.visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    this.tl.reversed(!this.props.visible);
  }
}

export default Menu;
