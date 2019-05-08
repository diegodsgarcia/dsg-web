import React, { Component } from 'react';
import { TweenMax } from 'gsap';
import Section from '../../model/Section';
import Menu from '../menu/Menu';
import './Header.scss';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

/* eslint no-unused-vars: 0 */
const plugins = [ScrollToPlugin]

type HeaderProps = {
  currentSection: Section|null
}

type HeaderState = {
  visible: boolean,
  isDark: boolean,
}
class Header extends Component<HeaderProps, HeaderState>  {
  menuRef;

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      isDark: true,
    }
  }

  setMenuVisible(visible) {
    this.setState({ visible });
  }

  render() {
    return (
      <header className='header'>
        <div 
          className={`navigation__menu ${this.state.isDark ? '--is-dark' : ''}`}
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

  componentWillReceiveProps(nextProps) {
    this.setState({ isDark: nextProps.currentSection.isDark })
  }

  navigateTo(event) {
    const route = event.currentTarget.href.replace('#', '.').match(/\.\w+/)[0];    
    this.setState({ visible: false });
    TweenMax.to(window, .8, {scrollTo: `${route}`});
  }
}

export default Header;
