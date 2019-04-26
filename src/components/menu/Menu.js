import React, { Component } from 'react';
import { TimelineMax } from 'gsap/all';
import './Menu.scss';

class Menu extends Component {
  tl = new TimelineMax({ paused: true });
  elementRef;

  render() {
    return (
      <div className='menu' ref={div => this.elementRef = div} style={{ transform: 'translateX(-100vw)' }}>
        <button className='menu__close' onClick={this.props.close}>
          Close
        </button>
        <ul className='menu__list'>
          <li className='menu__item'>
            <a className='menu__link' href="#about" onClick={this.props.navigateTo}>About</a>
          </li>
          <li className='menu__item'>
            <a className='menu__link' href="#works" onClick={this.props.navigateTo}>Works</a>
          </li>
          <li className='menu__item'>
            <a className='menu__link' href="#contact" onClick={this.props.navigateTo}>Contact</a>
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
