import React, { Component } from 'react'
import Menu from '../menu/Menu'
import './Header.scss'

class Header extends Component  {
  constructor() {
    super()
    this.state = {
      isNavigationOpen: false
    }
  }

  render() {
    return (
      <header className='header'>
        <div 
          className='navigation__menu'
          onClick={this.onOpenNavigation.bind(this)}>
        </div>
        <nav 
          className='navigation'
          ref={this.menuRef}>
          { this.state.isNavigationOpen && <Menu isOpen={this.state.isNavigationOpen} /> }
        </nav>
      </header>
  )}

  onOpenNavigation() {
    this.setState({ isNavigationOpen: !this.state.isNavigationOpen })
  }
}

export default Header