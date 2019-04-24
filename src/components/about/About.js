import React, { Component } from 'react';
import Utils from '../../utils/Utils';
import { about } from '../../i18n/texts';
import Typing from '../typing/Typing';
import './About.scss';

class About extends Component {
  state = {
    canAnimate: false,
  }
  sectionName = 'section about';

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

  componentWillReceiveProps(nextProps) {
    this.setState({ canAnimate: Utils.findSection(nextProps.sections, this.sectionName)})
  }

}

export default About
