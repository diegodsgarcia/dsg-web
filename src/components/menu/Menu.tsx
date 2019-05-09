import React, { Component } from 'react';
import './Menu.scss';

interface MenuProps {
  isDark: boolean,
  visible: boolean,
  navigateTo
}

class Menu extends Component<MenuProps> {
  elementRef;

  render() {
    return (
      <div className={`menu ${this.props.visible && '--open'} ${this.props.isDark && '--dark'}`} ref={div => this.elementRef = div}>
        <div className="menu__background"></div>
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

  componentDidUpdate() {
    if (this.props.visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }
}

export default Menu;
