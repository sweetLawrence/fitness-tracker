import React, { useState } from 'react'
import InfoFeed from './InfoFeed'
import InfoFeedDashboard from './InfoFeedDashboard'

const InfoWrapper = () => {
    const [selectedExercise, setSelectedExercise] = useState(0);
    
  return (
    <div className='infowrapper animate__animated animate__zoomIn'>
        <InfoFeed setSelectedExercise={setSelectedExercise} selectedExercise={selectedExercise}/>
        <InfoFeedDashboard selectedExercise={selectedExercise}/>
    </div>
  )
}

export default InfoWrapper