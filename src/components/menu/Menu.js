import React, { Component, createRef } from 'react'
import { TweenMax } from 'gsap'
import './Menu.scss'

class Menu extends Component {
  constructor() {
    super()
    this.elementRef = createRef()
  }

  render() {
    return (
      <div className='menu' ref={this.elementRef}>
        <ul className='menu__list'>
          <li className='menu__item'>
            Works
          </li>
          <li className='menu__item'>
            My life style
          </li>
          <li className='menu__item'>
            Works
          </li>
        </ul>
      </div>
    )
  }

  componentDidMount() {
    TweenMax.fromTo(this.elementRef.current, 1, { height: '0' }, { height: '100%'})
  }

  componentDidUpdate() {
    console.log(1)
    TweenMax.to(this.elementRef.current, 1, { height: '0' })
  }
}

export default Menu