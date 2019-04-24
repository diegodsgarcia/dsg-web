import React, { Component } from 'react';
import { TimelineMax } from 'gsap';
import { about } from '../../i18n/texts';
import Typing from '../typing/Typing';
import './About.scss';

class About extends Component {
  constructor(props) {
    super();
    this.state = {
      throwSection: false,
    }
    this.tl = new TimelineMax({ paused: true });
    this.elementRef = null;
  }

  render() {
    return (
      <section className='section about'>
      <div className='container'>
        <h1 className='title'>
          About me
        </h1>
        <Typing play={this.state.throwSection}>
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
  }

  componentDidUpdate() {
    // this.setState({ throwSection: !!this.props.sections.stackSection.find(section => section.className === 'section about')})
    // console.log(!!this.props.sections.stackSection.find(section => section.className === 'section about'));
  }

}

export default About
