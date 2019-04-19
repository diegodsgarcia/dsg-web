import React from 'react'
import Typing from '../typing/Typing';
import './Works.scss'

const Works = () => (
  <section className='section works'>
    <div className='container'>
      <h1 className='title'>
        Works
      </h1>
      <Typing>
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

)

export default Works
