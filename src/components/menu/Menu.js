import React, { Component, createRef } from 'react'
import { TweenMax } from 'gsap'
import './Menu.scss'

class Menu extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
    this.elementRef = createRef()
  }

  render() {
    return (
      <div className='menu' ref={this.elementRef}>
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
    TweenMax.fromTo(this.elementRef.current, 1, { height: '0' }, { height: '100%'})
  }
}

export default Menu