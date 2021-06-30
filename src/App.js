import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa';
import {data} from './data'


function App() {

  const [job, setJob] = useState(data);
  const [value, setValue] = useState(0);

  console.log(job[value]);
  
  const {company, title, deadline, requirements, link} = job[value];

  return <section className="section">
      <div className="title">
      <h2>Available JOBS</h2>
      <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {
            job.map((item, index)=>{
              return <button key={item.id}
              onClick={()=>setValue(index)}
              className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.company}
                </button>
              
            })
          }
        </div>
        <article className="job-info">
          <h3>Position: {title}</h3>
          <h4>{company}</h4>
          <p className="job-date">Deadline: {deadline}</p> 
          <p className="job-date">Requirements:</p> 
          {requirements.map((requirements, index)=>{
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                
                <p>{requirements}</p>
              </div>
            )
          })}
          <p className="job-date">Apply at: {link}</p> 
        </article>
      </div>
  </section>
}

export default App
