import React, { Component } from 'react';
import { TimelineMax, TweenMax } from 'gsap/all';
import { SectionProps, SectionState } from '../../model/Section';
import Modal from '../modal/Modal';
import Utils from '../../utils/Utils';
import Typing from '../typing/Typing';
import { works } from '../../i18n/texts';
import './Works.scss';


class Works extends Component<SectionProps, any>  {
  sectionName = 'section works';
  tl = new TimelineMax({ paused: true });
  modal;

  constructor(props) {
    super(props);

    this.state = {
      canAnimate: false,
      wasAnimate: false,
      modalIsOpen: false,
      jobSelected: null,
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
              <div 
                key={i} 
                className='works__job' 
                onMouseEnter={this.onMouseEnter.bind(this)} 
                onMouseLeave={this.onMouseLeave.bind(this)}
                onClick={this.onOpenModal.bind(this, job)}>
                <img src={`/images/${job.figure}`} alt={job.title} />
                <span>{job.title}</span>
              </div>
            ))}
          </div>
          <Modal
            ref={(el)=> this.modal = el} 
            title={this.state.jobSelected && this.state.jobSelected.title}
            description={this.state.jobSelected && this.state.jobSelected.description}
            tecnology={this.state.jobSelected && this.state.jobSelected.tecnology}
            gallery={(this.state.jobSelected && this.state.jobSelected.gallery) || []}
            visible={this.state.modalIsOpen}
            closeModal={this.onCloseModal.bind(this)}
          />
        </div>
      </section>
    );
  }

  componentDidMount() {
    this.tl
      .staggerFrom('.works__job', .5, { scale: 0 }, .3)
      .set('.works__job', { clearProps: 'all'});

    TweenMax.set(this.modal.refs.container, { y: '100vh'});
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

  onOpenModal(job) {
    // this.setState({ modalIsOpen: true, jobSelected: job });
  }

  onCloseModal() {
    this.setState({ modalIsOpen: false, jobSelected: null });
  }

  executeAnimation() {
    this.tl.play();
    this.setState({ wasAnimate: true })
  }
}

export default Works
