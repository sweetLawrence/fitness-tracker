import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'

const MainPage = () => {
    const [selectedExercise, setSelectedExercise] = useState(0);
  return (
    <div className='main-page animate__animated animate__fadeInUp'>
        <Sidebar setSelectedExercise={setSelectedExercise} selectedExercise={selectedExercise} />
        <Dashboard selectedExercise={selectedExercise} />
    </div>
  )
}

export default MainPage