// import React, { useState, useEffect } from 'react';
// import BoxRepresentation from './BoxRepresentation';
// import time from '../../ImagesFolder/hours.png';
// import time1 from '../../ImagesFolder/time1.png';
// import completed from '../../ImagesFolder/completed.jpg';
// import progress from '../../ImagesFolder/progress.jpg';
// import remaining from '../../ImagesFolder/remaining.png';
// import target from '../../ImagesFolder/target.png';
// import { UserData } from '../AllData/Data';
// import LineGraph from '../Graphs/LineGraph';
// import AccruedProgress from './AccruedProgress';
// import { SidebarData } from '../AllData/SidebarData';
// import axios from "axios";
// import Navbar2 from './Navbar2';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Sidebar from './Sidebar';
// import Sidebar2 from './Sidebar2';

// const Dashboard = ({ selectedExercise, setSelectedExercise,isMobileView, handleToggleSidebar  }) => {
//   const exercise = SidebarData[selectedExercise];
//   const exerciseData = UserData.find((data) => data.exercise === exercise);

//   const [userData, setUserData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: 'Users gained',
//         data: [],
//         backgroundColor: [],
//         tension: 0.4,
//       },
//     ],
//   });

//   const [inputData, setInputData] = useState([]);
//   useEffect(() => {
//     const fetchInputData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/insert', {
//           headers: {
//             'accessToken': localStorage.getItem("accessToken"),
//           },
//         });
//         console.log(response.data)
//         setInputData(response.data);
//       } catch (error) {
//         console.error('Error fetching input data:', error);
//       }
//     };

//     fetchInputData();
//   }, []);

//   const dayIndices = {
//     Sunday: 0,
//     Monday: 1,
//     Tuesday: 2,
//     Wednesday: 3,
//     Thursday: 4,
//     Friday: 5,
//     Saturday: 6,
//   };

//   const sortedInputData = inputData.slice().sort((a, b) => dayIndices[b.dayOfWeek] - dayIndices[a.dayOfWeek]);

//   console.log("Here", sortedInputData)
//   console.log("Here22", inputData)

//   let selectedExerciseData;
//   if (Array.isArray(sortedInputData) && sortedInputData.length > 0) {
//     selectedExerciseData = sortedInputData.find((data) => data.exerciseId === selectedExercise + 1);
//   } else {
//     selectedExerciseData = null;
//   }

//   const target_value = selectedExerciseData ? selectedExerciseData.target : 0;
//   const time_value = selectedExerciseData ? selectedExerciseData.timeTaken : 0;
//   const achieved_value = selectedExerciseData ? selectedExerciseData.achieved : 0;
//   const remaining_value = selectedExerciseData ? (selectedExerciseData.target - selectedExerciseData.achieved) : 0;
//   const percentageProgress = selectedExerciseData ? Math.floor(((selectedExerciseData.achieved / selectedExerciseData.target) * 100)) : 0;

//   const mapDataToDays = () => {
//     const daysArray = UserData[selectedExercise].labels;
//     const achievedArray = daysArray.map((day) => {
//       const dayData = sortedInputData.find((data) => data.dayOfWeek === day && data.exerciseId === selectedExercise + 1);
//       return dayData ? dayData.achieved : 0;

//     });
//     return achievedArray;
//   };


//   useEffect(() => {
//     const selectedData = UserData.find((data) => data.exercise === exercise);
//     setUserData({
//       labels: selectedData.labels,
//       datasets: [
//         {
//           label: selectedData.special_label,
//           data: mapDataToDays(),
//           backgroundColor: selectedData.backgroundColor,
//           tension: 0.4,
//         },
//       ],
//     });
//   }, [exercise, inputData]);

//   return (
//     <div className="dashboard">
//        <div className="exercises-display" onClick={handleToggleSidebar}>
//           More Exercises
//         </div>

//       <div className="upper-part">
       
//         <h2>
//           <span className="pre-title">Exercise: </span>
//           {exercise}
//         </h2>
      
//       </div>
//       <div className="box-displays">
//         <BoxRepresentation
//           imageSrc={target}
//           percentage={target_value}

//           title={exerciseData.boxRepresentation.target}
//         />
//         <BoxRepresentation
//           imageSrc={time1}
//           percentage={`${time_value}hr`}
//           title={exerciseData.boxRepresentation.time_title}
//         />
//         <BoxRepresentation
//           imageSrc={progress}
//           percentage={achieved_value}
//           title="Done"
//         />
//         <BoxRepresentation
//           imageSrc={remaining}
//           percentage={remaining_value}
//           title="Remaining"
//         />
//       </div>
//       <div className="bottom-part">
//         <div className="graphical-representation">
//           <div className='line-graph'>
//             {/* style={{ width: '500px', height: '300px' }} */}
//             <LineGraph chartData={userData} />
//           </div>
//         </div>
//         <div className="overall-progress">
//           <AccruedProgress
//             imageSrc={completed}
//             percentage={`${percentageProgress}%`}
//             title={exerciseData.accruedProgress.title}
//           />
//         </div>
//       </div>
    
//     </div>

//   );
// };

// export default Dashboard;


// import React, { useState, useEffect } from 'react';
// import BoxRepresentation from './BoxRepresentation';
// import LineGraph from '../Graphs/LineGraph';
// import AccruedProgress from './AccruedProgress';
// import { SidebarData } from '../AllData/SidebarData';
// import { UserData } from '../AllData/Data';
// import target from '../../ImagesFolder/target.png';
// import time1 from '../../ImagesFolder/time1.png';
// import completed from '../../ImagesFolder/completed.jpg';
// import progress from '../../ImagesFolder/progress.jpg';
// import remaining from '../../ImagesFolder/remaining.png';
// import axios from "axios";

// const Dashboard = ({ selectedExercise, setSelectedExercise, isMobileView, handleToggleSidebar }) => {
//   const exercise = SidebarData[selectedExercise];
//   const exerciseData = UserData.find((data) => data.exercise === exercise);

//   // Define state for user data
//   const [userData, setUserData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: 'Users gained',
//         data: [],
//         backgroundColor: [],
//         tension: 0.4,
//       },
//     ],
//   });

//   // Define state for input data
//   const [inputData, setInputData] = useState([]);

//   useEffect(() => {
//     // Fetch input data from your API
//     const fetchInputData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/insert', {
//           headers: {
//             'accessToken': localStorage.getItem("accessToken"),
//           },
//         });
//         console.log(response.data);
//         setInputData(response.data);
//       } catch (error) {
//         console.error('Error fetching input data:', error);
//       }
//     };

//     fetchInputData();
//   }, []); // The empty dependency array ensures this effect runs once after the initial render.

//   // Define an object to map days of the week to indices
//   const dayIndices = {
//     Sunday: 0,
//     Monday: 1,
//     Tuesday: 2,
//     Wednesday: 3,
//     Thursday: 4,
//     Friday: 5,
//     Saturday: 6,
//   };

//   // Sort the input data by day of the week
//   const sortedInputData = inputData.slice().sort((a, b) => dayIndices[b.dayOfWeek] - dayIndices[a.dayOfWeek]);

//   // Find the selected exercise data
//   let selectedExerciseData;
//   if (Array.isArray(sortedInputData) && sortedInputData.length > 0) {
//     selectedExerciseData = sortedInputData.find((data) => data.exerciseId === selectedExercise + 1);
//   } else {
//     selectedExerciseData = null;
//   }

//   // Define variables for box representation
//   const target_value = selectedExerciseData ? selectedExerciseData.target : 0;
//   const time_value = selectedExerciseData ? selectedExerciseData.timeTaken : 0;
//   const achieved_value = selectedExerciseData ? selectedExerciseData.achieved : 0;
//   const remaining_value = selectedExerciseData ? (selectedExerciseData.target - selectedExerciseData.achieved) : 0;
//   const percentageProgress = selectedExerciseData ? Math.floor((selectedExerciseData.achieved / selectedExerciseData.target) * 100) : 0;

//   // Function to map data to days
//   const mapDataToDays = () => {
//     const daysArray = UserData[selectedExercise].labels;
//     const achievedArray = daysArray.map((day) => {
//       const dayData = sortedInputData.find((data) => data.dayOfWeek === day && data.exerciseId === selectedExercise + 1);
//       return dayData ? dayData.achieved : 0;
//     });
//     return achievedArray;
//   };

//   // Update the user data when exercise or input data changes
//   useEffect(() => {
//     const selectedData = UserData.find((data) => data.exercise === exercise);
//     setUserData({
//       labels: selectedData.labels,
//       datasets: [
//         {
//           label: selectedData.special_label,
//           data: mapDataToDays(),
//           backgroundColor: selectedData.backgroundColor,
//           tension: 0.4,
//         },
//       ],
//     });
//   }, [exercise, inputData,achieved_value]);

//   return (
//     <div className="dashboard">
//       <div className="exercises-display" onClick={handleToggleSidebar}>
//         More Exercises
//       </div>
//       <div className="upper-part">
//         <h2>
//           <span className="pre-title">Exercise: </span>
//           {exercise}
//         </h2>
//       </div>
//       <div className="box-displays">
//         <BoxRepresentation
//           imageSrc={target}
//           percentage={target_value}
//           title={exerciseData.boxRepresentation.target}
//         />
//         <BoxRepresentation
//           imageSrc={time1}
//           percentage={`${time_value}hr`}
//           title={exerciseData.boxRepresentation.time_title}
//         />
//         <BoxRepresentation
//           imageSrc={progress}
//           percentage={achieved_value}
//           title="Done"
//         />
//         <BoxRepresentation
//           imageSrc={remaining}
//           percentage={remaining_value}
//           title="Remaining"
//         />
//       </div>
//       <div className="bottom-part">
//         <div className="graphical-representation">
//           <div className='line-graph'>
//             <LineGraph chartData={userData} />
//           </div>
//         </div>
//         <div className="overall-progress">
//           <AccruedProgress
//             imageSrc={completed}
//             percentage={`${percentageProgress}%`}
//             title={exerciseData.accruedProgress.title}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




import React, { useState, useEffect } from 'react';
import BoxRepresentation from './BoxRepresentation';
import time from '../../ImagesFolder/hours.png';
import time1 from '../../ImagesFolder/time1.png';
import completed from '../../ImagesFolder/completed.jpg';
import progress from '../../ImagesFolder/progress.jpg';
import remaining from '../../ImagesFolder/remaining.png';
import target from '../../ImagesFolder/target.png';
import { UserData } from '../AllData/Data';
import LineGraph from '../Graphs/LineGraph';
import AccruedProgress from './AccruedProgress';
import { SidebarData } from '../AllData/SidebarData';
import axios from 'axios';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Sidebar from './Sidebar';
import Sidebar2 from './Sidebar2';

function getDatesForCurrentWeek() {
  const currentDate = new Date();
  const currentDayOfWeek = currentDate.getDay(); // 0 for Sunday, 1 for Monday, etc.
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Calculate the starting date of the current week
  const startDate = new Date(currentDate);
  startDate.setDate(currentDate.getDate() - currentDayOfWeek);

  const datesForWeek = [];

  // Generate the dates and days for the current week
  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    const dayOfWeek = daysOfWeek[(currentDayOfWeek + i) % 7];
    datesForWeek.push({ date, dayOfWeek });
  }

  return datesForWeek;
}

const Dashboard = ({ selectedExercise, setSelectedExercise, isMobileView, handleToggleSidebar }) => {
  const exercise = SidebarData[selectedExercise];
  const exerciseData = UserData.find((data) => data.exercise === exercise);

  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Users gained',
        data: [],
        backgroundColor: [],
        tension: 0.4,
      },
    ],
  });

  const [inputData, setInputData] = useState([]);
  useEffect(() => {
    const fetchInputData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/insert', {
          headers: {
            'accessToken': localStorage.getItem("accessToken"),
          },
        });
        console.log(response.data);
        setInputData(response.data);
      } catch (error) {
        console.error('Error fetching input data:', error);
      }
    };

    fetchInputData();
  }, []);

  const dayIndices = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };

  const sortedInputData = inputData.slice().sort((a, b) => dayIndices[b.dayOfWeek] - dayIndices[a.dayOfWeek]);

  console.log("Here", sortedInputData);
  console.log("Here22", inputData);

  let selectedExerciseData;
  if (Array.isArray(sortedInputData) && sortedInputData.length > 0) {
    selectedExerciseData = sortedInputData.find((data) => data.exerciseId === selectedExercise + 1);
  } else {
    selectedExerciseData = null;
  }

  const target_value = selectedExerciseData ? selectedExerciseData.target : 0;
  const time_value = selectedExerciseData ? selectedExerciseData.timeTaken : 0;
  const achieved_value = selectedExerciseData ? selectedExerciseData.achieved : 0;
  const remaining_value = selectedExerciseData ? (selectedExerciseData.target - selectedExerciseData.achieved) : 0;
  const percentageProgress = selectedExerciseData ? Math.floor(((selectedExerciseData.achieved / selectedExerciseData.target) * 100)) : 0;

  // Get the dates for the current week
  const datesForWeek = getDatesForCurrentWeek();

  // Map the achieved values to the days of the week
  const achievedValuesForWeek = datesForWeek.map((day) => {
    const dayData = sortedInputData.find((data) => data.dayOfWeek === day.dayOfWeek && data.exerciseId === selectedExercise + 1);
    return dayData ? dayData.achieved : 0;
  });

  // Update the chart data for the current week
  useEffect(() => {
    setUserData({
      labels: datesForWeek.map((day) => day.dayOfWeek), // Days of the week
      datasets: [
        {
          label: "Achieved",
          data: achievedValuesForWeek,
          backgroundColor: exerciseData.backgroundColor,
          tension: 0.4,
        },
      ],
    });
  }, [exercise, inputData, achievedValuesForWeek]);

  return (
    <div className="dashboard">
      <div className="exercises-display" onClick={handleToggleSidebar}>
        More Exercises
      </div>

      <div className="upper-part">

        <h2>
          <span className="pre-title">Exercise: </span>
          {exercise}
        </h2>

      </div>
      <div className="box-displays">
        <BoxRepresentation
          imageSrc={target}
          percentage={target_value}
          title={exerciseData.boxRepresentation.target}
        />
        <BoxRepresentation
          imageSrc={time1}
          percentage={`${time_value}hr`}
          title={exerciseData.boxRepresentation.time_title}
        />
        <BoxRepresentation
          imageSrc={progress}
          percentage={achieved_value}
          title="Done"
        />
        <BoxRepresentation
          imageSrc={remaining}
          percentage={remaining_value}
          title="Remaining"
        />
      </div>
      <div className="bottom-part">
        <div className="graphical-representation">
          <div className='line-graph'>
            <LineGraph chartData={userData} />
          </div>
        </div>
        <div className="overall-progress">
          <AccruedProgress
            imageSrc={completed}
            percentage={`${percentageProgress}%`}
            title={exerciseData.accruedProgress.title}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
