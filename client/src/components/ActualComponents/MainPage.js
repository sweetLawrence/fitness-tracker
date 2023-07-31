// import React, { useState } from 'react'
// import Sidebar from './Sidebar'
// import Dashboard from './Dashboard'
// import Navbar2 from './Navbar2';
// import Sidebar2 from './Sidebar2';

// const MainPage = () => {
//   const [selectedExercise, setSelectedExercise] = useState(0);
//   return (
//     <div className="main-h-page">
//       <Navbar2 />
//       <div className='main-page animate__animated animate__fadeInUp'>
//         <Sidebar setSelectedExercise={setSelectedExercise} selectedExercise={selectedExercise} />
//         <Sidebar2 setSelectedExercise={setSelectedExercise} selectedExercise={selectedExercise} />
//         <Dashboard selectedExercise={selectedExercise} />
        
//       </div>
//     </div>

//   )
// }

// export default MainPage


// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import Sidebar2 from './Sidebar2'; // Make sure to import Sidebar2
// import Dashboard from './Dashboard';
// import Navbar2 from './Navbar2';

// const MainPage = () => {
//   const [selectedExercise, setSelectedExercise] = useState(0);
//   const [showSidebar, setShowSidebar] = useState(false);

//   const handleToggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//   };

//   return (
//     <div className="main-h-page">
//       <Navbar2 />
//       <div className='main-page animate__animated animate__fadeInUp'>
//         {showSidebar ? (
//           <Sidebar2
//             setSelectedExercise={setSelectedExercise2}
//             selectedExercise={selectedExercise2}
//             handleToggleSidebar={handleToggleSidebar} // Pass handleToggleSidebar to Sidebar2
//           />
//         ) : (
//           <Sidebar
//             setSelectedExercise={setSelectedExercise}
//             selectedExercise={selectedExercise}
//             handleToggleSidebar={handleToggleSidebar} // Pass handleToggleSidebar to Sidebar
//           />
//         )}
//         <Dashboard selectedExercise={selectedExercise} />
//       </div>
//     </div>
//   );
// };

// export default MainPage;


import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Navbar2 from './Navbar2';
import Sidebar2 from './Sidebar2';

const MainPage = () => {
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
        <Dashboard
          selectedExercise={selectedExercise}
          isMobileView={isMobileView}
          handleToggleSidebar={handleToggleSidebar}
        />
      </div>
    </div>
  );
};

export default MainPage;
