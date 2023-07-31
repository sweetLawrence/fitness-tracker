// import React, { useState } from 'react'
// import InfoFeed from './InfoFeed'
// import InfoFeedDashboard from './InfoFeedDashboard'
// import Navbar2 from './Navbar2';
// import Sidebar from './Sidebar';

// const InfoWrapper = () => {
//   const [selectedExercise, setSelectedExercise] = useState(0);

//   return (
//     <div className="main-h-page">
//       <Navbar2 />
//       <div className='infowrapper animate__animated animate__zoomIn'>
//         <InfoFeed setSelectedExercise={setSelectedExercise} selectedExercise={selectedExercise} />
//         <InfoFeedDashboard selectedExercise={selectedExercise} />
       
//       </div>
//     </div>

//   )
// }

// export default InfoWrapper



import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Navbar2 from './Navbar2';
import Sidebar2 from './Sidebar2';
import InfoFeed2 from './InfoFeed2';
import InfoFeed from './InfoFeed';
import InfoFeedDashboard from './InfoFeedDashboard';

const InfoWrapper = () => {
  const [selectedExercise, setSelectedExercise] = useState(0);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [showInfoFeed2, setShowInfoFeed2] = useState(false);



  useEffect(() => {
    const handleResize = () => {

      // setIsMobileView(window.innerWidth < 768);
      if (!isMobileView) {
        setIsMobileView(window.innerWidth < 768);
      }
    };

    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggleSidebar = () => {
    setIsMobileView(!isMobileView);
    setShowInfoFeed2((prevShowInfoFeed2) => !prevShowInfoFeed2);
  
  };

  return (
    <div className="main-h-page">
      <Navbar2 />
      
      <div className='main-page animate__animated animate__fadeInUp'>
        {isMobileView ? (
          ! showInfoFeed2&& (
            <InfoFeed2
              setSelectedExercise={setSelectedExercise}
              selectedExercise={selectedExercise}
              handleToggleSidebar={handleToggleSidebar}
            />
          )
        ) : (
          <InfoFeed
            setSelectedExercise={setSelectedExercise}
            selectedExercise={selectedExercise}
            handleToggleSidebar={handleToggleSidebar}
          />
        )}
       
        <InfoFeedDashboard
          selectedExercise={selectedExercise}
          isMobileView={isMobileView}
          handleToggleSidebar={handleToggleSidebar}
        />
      </div>
    </div>
  );
};

export default InfoWrapper;
