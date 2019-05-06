import React, { Component } from 'react';
import { TimelineMax, TweenMax } from 'gsap/all';
import { SectionProps, SectionState } from '../../model/Section';
import Utils from '../../utils/Utils';
import Typing from '../typing/Typing';
import { works } from '../../i18n/texts';
import './Works.scss';


class Works extends Component<SectionProps, SectionState>  {
  sectionName = 'section works';
  tl = new TimelineMax({ paused: true });

  constructor(props) {
    super(props);

    this.state = {
      canAnimate: false,
      wasAnimate: false,
    }
  }

  render() {
    return (
      <section className={this.sectionName}>
        <div className='container'>
          <h1 className='title'>
            Works
          </h1>
          <Typing play={this.state.canAnimate}>
            {works.description}
          </Typing>
          <div className='works__jobs'>
            {works.jobs.map((job, i) =>(
              <div key={i} className='works__job' onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <img src={job.figure} alt={job.title} />
                <span>{job.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  componentDidMount() {
    this.tl
      .staggerFrom('.works__job', .5, { scale: 0 }, .3)
      .set('.works__job', { clearProps: 'all'} );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ canAnimate: Utils.findSection(nextProps.sections, this.sectionName)});
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.canAnimate && !nextState.wasAnimate) {
      this.executeAnimation();
    }
  }

  onMouseEnter(event) {
    const element = event.currentTarget
    TweenMax.to(element, .3, { scale: 1.05 });
  }

  onMouseLeave(event) {
    const element = event.currentTarget
    TweenMax.to(element, .3, { scale: 1 });
  }

  executeAnimation() {
    this.tl.play();
    this.setState({ wasAnimate: true })
  }
}

export default Works
