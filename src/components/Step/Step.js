import React from 'react'
import './Step.css'

function Step({step}) {
  return (
     <div className='step-container'>
        <p className='step-number'>{step.number}</p>
        <p className='step-name'>{step.title}</p>
        <p className='step-detail'>{step.detail}</p>
     </div>

  )
}

export default Step