import React, { Component } from 'react'
import { TimelineMax } from 'gsap'
import './Menu.scss'

class Menu extends Component {
  constructor(props) {
    super();
    this.menuTween = new TimelineMax({ paused: true });
    this.elementRef = null;
  }

  render() {
    return (
      <div className='menu' ref={div => this.elementRef = div} style={{ transform: 'translateX(-100%)' }}>
        <button className='menu__close' onClick={this.props.close}>
          Close
        </button>
        <ul className='menu__list'>
          <li className='menu__item'>
            About
          </li>
          <li className='menu__item'>
            Works
          </li>
          <li className='menu__item'>
            Contact
          </li>
        </ul>
      </div>
    )
  }

  componentDidMount() {
    this.menuTween
      .to(this.elementRef, .4, { x: 0 })
      .reversed(true)
      .paused(false)
  }

  componentDidUpdate() {
    this.menuTween.reversed(!this.props.visible);
  }
}

export default Menu;