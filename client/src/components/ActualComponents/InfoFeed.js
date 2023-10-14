  // import React from 'react'

// const InfoFeed = () => {
//   return (
//     <div>InfoFeed</div>
//   )
// }

// export default InfoFeed

import React, { useState } from 'react';
import { SidebarData } from '../AllData/SidebarData';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';
import Looks6Icon from '@mui/icons-material/Looks6';
import Dashboard from './Dashboard';
import planning from '../../ImagesFolder/planning.jpg'

const InfoFeed = ({ setSelectedExercise,selectedExercise }) => {

  function handleItemSelection(index) {
    setSelectedExercise(index)
  }
  // console.log(selectedExercise)
  const iconMap = {
    push: LooksOneIcon,
    pull: LooksTwoIcon,
    squats: Looks3Icon,
    running: Looks4Icon,
    cycling: Looks5Icon,
    swimming: Looks6Icon,
  };

  const icons = Object.keys(iconMap);

  return (
    <div className='selection info-feed'>

      <h3>Workout Planner</h3>
      <ul className="nav-li">
        {SidebarData.map((data, index) => {
          const IconComponent = iconMap[icons[index]];
          const isActive = index === selectedExercise;
          console.log(isActive)

          return (
            <li key={index}
              className={`row ${isActive ? 'active' : ''}`}
              onClick={() => {
                handleItemSelection(index)
              }}>
              <span className="icon">
                <IconComponent />
              </span>
              {data}
            </li>
          );
        })}
      </ul>
      {/* <div className="plan-workout">
        <img className='planning' src={planning} alt="" />
      </div> */}
      
    </div>
  );
};

export default InfoFeed;
