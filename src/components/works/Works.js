import React, { Component } from 'react';
import Utils from '../../utils/Utils';
import Typing from '../typing/Typing';
import './Works.scss';

class Works extends Component {
  state = {
    canAnimate: false,
  }
  sectionName = 'section works';

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

  componentWillReceiveProps(nextProps) {
    this.setState({ canAnimate: Utils.findSection(nextProps.sections, this.sectionName)});
  }
}

export default Works
