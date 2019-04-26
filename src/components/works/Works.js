import React, { Component } from 'react';
import { TimelineMax } from 'gsap';
import Utils from '../../utils/Utils';
import Typing from '../typing/Typing';
import './Works.scss';

class Works extends Component {
  state = {
    canAnimate: false,
  }
  sectionName = 'section works';
  tl = new TimelineMax({ paused: true });

  render() {
    return (
      <section className={this.sectionName}>
        <div className='container'>
          <h1 className='title'>
            Works
          </h1>
          <Typing play={this.state.canAnimate}>
            Here is about a little about my job :).
          </Typing>
          <div className='works__jobs'>
            {[1, 2, 3].map((value, i) =>(
              <div key={i} className='works__job'>
                <span>Job {value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  componentDidMount() {
    this.tl.staggerFrom('.works__job', .5, { scale: 0 }, .3);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ canAnimate: Utils.findSection(nextProps.sections, this.sectionName)});
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

export default Works
