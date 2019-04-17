import React, { Component } from 'react'
import Menu from '../menu/Menu'
import './Header.scss'

class Header extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }
  }

  setMenuVisible(visible) {
    this.setState({ visible });
  }

  render() {
    return (
      <header className='header'>
        <div 
          className='navigation__menu'
          onClick={this.setMenuVisible.bind(this, true)}>
        </div>
        <nav 
          className='navigation'
          ref={this.menuRef}>
            <Menu 
              visible={this.state.visible}
              close={this.setMenuVisible.bind(this, false)}/> 
        </nav>
      </header>
  )}
}

export default Header