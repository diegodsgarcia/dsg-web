import React from 'react';
import Typing from '../typing/Typing';
import './Contact.scss'

const Contact = () => (
  <section className='section contact'>
    <div className='container'>
      <h1 className='title'>
        Contact
      </h1>
      <Typing>
        Follow-me or Contact-me in my social media!
      </Typing>
      <div className='social'>
        <a title='G-mail' className='social__link icon-gmail' href='mailto:diego.ds.garcia@gmail.com' target='_blank'></a>
        <a title='Instagram' className='social__link icon-instagram' href='https://www.instagram.com/diegodsgarcia/' target='_blank'></a>
        <a title='Twitter' className='social__link icon-twitter' href='https://twitter.com/diegodsgarcia' target='_blank'></a>
      </div>
    </div>

  </section>
)

export default Contact
