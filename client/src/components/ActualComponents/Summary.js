// import React from 'react'
// import Navbar2 from './Navbar2'

// const Summary = () => {
//   return (
//     <div className="summary">
//       <Navbar2 />
//       summary
//     </div>
//   )
// }

// export default Summary



import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Dashboard2 from './Dashboard2';
import Navbar2 from './Navbar2';
import Sidebar2 from './Sidebar2';

const Summary = () => {
  const [selectedExercise, setSelectedExercise] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggleSidebar = () => {
    setIsMobileView(!isMobileView);
  };

  return (
    <div className="main-h-page">
      <Navbar2 />
      <div className='main-page animate__animated animate__fadeInUp'>
        {isMobileView ? (
          <Sidebar2
            setSelectedExercise={setSelectedExercise}
            selectedExercise={selectedExercise}
            handleToggleSidebar={handleToggleSidebar}
          />
        ) : (
          <Sidebar
            setSelectedExercise={setSelectedExercise}
            selectedExercise={selectedExercise}
            handleToggleSidebar={handleToggleSidebar}
          />
        )}
        <Dashboard2
          selectedExercise={selectedExercise}
          isMobileView={isMobileView}
          handleToggleSidebar={handleToggleSidebar}
        />
      </div>
    </div>
  );
};

export default Summary;