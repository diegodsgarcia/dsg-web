import React, { Component } from 'react';
import { TimelineMax } from 'gsap';
import Utils from '../../utils/Utils';
import { about } from '../../i18n/texts';
import Typing from '../typing/Typing';
import './About.scss';

class About extends Component {
  state = {
    canAnimate: false,
    wasAnimate: false,
  }
  sectionName = 'section about';
  tl = new TimelineMax({ paused: true });

  render() {
    return (
      <section className={this.sectionName}>
        <div className='container'>
          <h1 className='title'>
            About me
          </h1>
          <Typing play={this.state.canAnimate}>
            {about.description}
          </Typing>
          <div className='skills'>
            {about.skills.map((skill, i) => (
              <div className='skill__item' key={i}>
                <div className='skill__icon'>
                  <i className={skill.icon}></i>
                </div>
                <div className='skill__name'>
                  {skill.name}
                </div>
                <div className='skill__description'>
                  <span className='skill__actually'>{skill.actually}</span>
                  <span className='skill__rage'>{skill.rage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  componentDidMount() {
    this.tl.staggerFrom('.skill__item', .7, { cycle: { x: [100, -100]}, autoAlpha: 0 }, .5);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ canAnimate: Utils.findSection(nextProps.sections, this.sectionName)})
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.canAnimate && !nextState.wasAnimate) {
      this.executeAnimation();
    }
  }

  executeAnimation() {
    this.tl.play();
    this.setState({ wasAnimate: true })
  }

}

export default About
