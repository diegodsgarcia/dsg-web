import React, { Component } from 'react';
import { TweenMax } from 'gsap/all';
import Menu from '../menu/Menu';
import './Header.scss';


class Header extends Component  {
  state = {
    visible: false
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
              close={this.setMenuVisible.bind(this, false)}
              navigateTo={this.navigateTo.bind(this)}
              /> 
        </nav>
      </header>
  )}

  navigateTo(event) {
    const route = event.currentTarget.href.replace('#', '.').match(/\.\w+/)[0];    
    this.setState({ visible: false });
    TweenMax.to(window, .8, {scrollTo: `${route}`});
  }
}

export default Header;
