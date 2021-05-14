import React from 'react'
import resume from '../Images/AlbertTranResume.pdf'

const Resume = () => {
  return (
    <div style={{position: 'absolute', width:'100%', height:'100%'}}>
      <embed src={resume} width="100%" height="100%" />
    </div>
  )
}

export default Resume
