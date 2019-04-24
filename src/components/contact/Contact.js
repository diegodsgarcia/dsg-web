import React, { Component } from 'react';
import Utils from '../../utils/Utils';
import Typing from '../typing/Typing';
import './Contact.scss';

class Contact extends Component {
  state = {
    canAnimate: false,
  }
  sectionName = 'section contact';

  render() {
    return (
      <section className={this.sectionName}>
        <div className='container'>
          <h1 className='title'>
            Contact
          </h1>
          <Typing play={this.state.canAnimate}>
            Follow-me or Contact-me in my social network!
          </Typing>
          <div className='social'>
            <a title='G-mail' className='social__link icon-gmail' href='mailto:diego.ds.garcia@gmail.com'>
              <span>G-mail</span>
            </a>
            <a title='Instagram' className='social__link icon-instagram' href='https://www.instagram.com/diegodsgarcia/'>
              <span>Instagram</span>
            </a>
            <a title='Twitter' className='social__link icon-twitter' href='https://twitter.com/diegodsgarcia'>
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </section>
    )
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ canAnimate: Utils.findSection(nextProps.sections, this.sectionName)});
  }
}

export default Contact;
