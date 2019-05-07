import React, { Component } from 'react';
import { TweenMax } from 'gsap';
import './Menu.scss';

interface MenuProps {
  close: Function,
  navigateTo: Function,
  visible: boolean,
}

class Menu extends Component<MenuProps> {
  elementRef;

  render() {
    return (
      <div className='menu' ref={div => this.elementRef = div}>
        <button className='menu__close' onClick={this.props.close.bind(this)}>
          Close
        </button>
        <ul className='menu__list'>
          <li className='menu__item'>
            <a className='menu__link' href="#about" onClick={this.props.navigateTo.bind(this)}>About</a>
          </li>
          <li className='menu__item'>
            <a className='menu__link' href="#works" onClick={this.props.navigateTo.bind(this)}>Works</a>
          </li>
          <li className='menu__item'>
            <a className='menu__link' href="#contact" onClick={this.props.navigateTo.bind(this)}>Contact</a>
          </li>
        </ul>
      </div>
    )
  }

  componentDidMount() {
    TweenMax.set(this.elementRef, { x: '-100%'});
  }

  componentDidUpdate() {
    if (this.props.visible) {
      document.body.style.overflow = 'hidden';
      TweenMax.to(this.elementRef, .4, { x: '0%' })
    } else {
      document.body.style.overflow = 'visible';
      TweenMax.to(this.elementRef, .4, { x: '-100%' })
    }
  }
}

export default Menu;
