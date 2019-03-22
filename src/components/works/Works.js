import React from 'react'
import './Works.scss'

const Works = () => (
  <section className='section works'>
    <div className='container'>
      <h1 className='title'>
        Works
      </h1>
      <p className='description'> 
        Here is about a little about my job :).
      </p>
      <div className='works__jobs'>
        {[1, 2, 3, 4, 5].map((value, i) =>(
          <div key={i}>
            <span>Job {value}</span>
          </div>
        ))}
      </div>
    </div>
  </section>

)

export default Works