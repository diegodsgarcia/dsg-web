import React, { Component } from 'react';
import { TweenMax } from 'gsap';
import Section from '../../model/Section';
import Menu from '../menu/Menu';
import './Header.scss';
import Utils from '../../utils/Utils';

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
          className={`navigation__menu ${this.state.isDark && '--dark'} ${this.state.visible && '--open'}`}
          onClick={this.setMenuVisible.bind(this, !this.state.visible)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <nav 
          className='navigation'
          ref={this.menuRef}>
            <Menu
              isDark={!this.state.isDark} 
              visible={this.state.visible} 
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
    Utils.scrollTo(document.querySelector(route), 1250);
  }
}

export default Header;
