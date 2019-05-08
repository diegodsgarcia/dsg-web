import React, { Component } from 'react';
import { TimelineMax, TweenMax, SteppedEase } from 'gsap';
import './Main.scss';

class Main extends Component {
  tl = new TimelineMax({ paused: true });
  title;
  cursor;
  scrollText;
  scrollIcon;

  render() {
    return (
      <section className='section main'>
        <div className="main__dsg">
          <h1 className='main__title' ref={el => this.title = el}>
            DSG
          </h1>
          <div className='main__cursor' ref={el => this.cursor = el}></div>
        </div>
        <div className='main__scroll' onClick={this.scrollDown.bind(this)}>
          <span className='main__scroll-text' ref={el => this.scrollText = el}>
            scroll down
          </span>
          <span className='main__scroll-icon' ref={el => this.scrollIcon = el}></span>
        </div>
      </section>
    );
  }

  componentDidMount() {
    this.title.innerHTML = this.title.textContent.trim().replace(/(\S+?)/g, '<span>$1</span>');
    this.scrollText.innerHTML = this.scrollText.textContent.trim().replace(/(\S+?)/g, '<span>$1</span>');
    const title = this.title.querySelectorAll('span');
    const scrollText = this.scrollText.querySelectorAll('span');
    const cursor = new TimelineMax().to(this.cursor, 1, { autoAlpha: 0, repeat: -1, repeatDelay: 0.3, delay: -1, ease: new SteppedEase(1).config(1) })

    this.tl
      .staggerFromTo(title, .3, { display: 'none'}, { display: 'inline' }, .2)
      .add(cursor)
      .staggerFromTo(scrollText, .3, { display: 'none'}, { display: 'inline' }, .08)
      .set(this.scrollIcon, { rotation: 45, x: '-50%' })
      .from(this.scrollIcon, .3, { y: 20, autoAlpha: 0 });
    this.tl.play();
  }

  scrollDown() {
    TweenMax.to(window, .8, {scrollTo: `.about`});
  }
}

export default Main
