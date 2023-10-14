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

// const Dashboard2 = ({ selectedExercise, setSelectedExercise,isMobileView, handleToggleSidebar  }) => {
//   const exercise = SidebarData[selectedExercise];
//   const exerciseData = UserData.find((data) => data.exercise === exercise);



//   const [userData, setUserData] = useState({
//     labels: ["Jan","Feb","Mar"],
//     datasets: [
//       {
//         label: 'Users gained',
//         data: generateRandomData(),
//         backgroundColor: [],
//         tension: 0.4,
//       },
//     ],
//   });

//   function generateRandomData() {
//     const randomData = [];
//     for (let i = 0; i < userData.labels.length; i++) {
//       const randomValue = Math.floor(Math.random() * 100); // Generate random data (adjust range as needed)
//       randomData.push(randomValue);
//     }
//     return randomData;
//   };

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

//   const target_value = Math.floor(Math.random() * 100);
//   const time_value = Math.floor(Math.random() * 100);
//   const achieved_value = Math.floor(Math.random() * 100);
//   const remaining_value = Math.floor(Math.random() * 100);
//   const percentageProgress = Math.floor(Math.random() * 100);

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

// export default Dashboard2;

// import React, { useState } from 'react';
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

// const Dashboard2 = ({ selectedExercise, setSelectedExercise, isMobileView, handleToggleSidebar }) => {
//   const exercise = SidebarData[selectedExercise];
//   const exerciseData = UserData.find((data) => data.exercise === exercise);

//   const labels = exerciseData.labels;

//   const target_value = Math.floor(Math.random() * 100);
//   const time_value = Math.floor(Math.random() * 100);
//   const achieved_value = Math.floor(Math.random() * 100);
//   const remaining_value = Math.floor(Math.random() * 100);
//   const percentageProgress = Math.floor(Math.random() * 100);

//   const userData = {
//     labels,
//     datasets: [
//       {
//         label: [exerciseData.special_label],
//         data: generateRandomData(labels.length),
//         backgroundColor: exerciseData.backgroundColor,
//         tension: 0.4,
//       },
//     ],
//   };

//   function generateRandomData(length) {
//     const randomData = Array.from({ length }, () => Math.floor(Math.random() * 100));
//     return randomData;
//   }

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
//         <BoxRepresentation imageSrc={target} percentage={target_value} title={exerciseData.boxRepresentation.target} />
//         <BoxRepresentation imageSrc={time1} percentage={`${time_value}hr`} title={exerciseData.boxRepresentation.time_title} />
//         <BoxRepresentation imageSrc={progress} percentage={achieved_value} title="Done" />
//         <BoxRepresentation imageSrc={remaining} percentage={remaining_value} title="Remaining" />
//       </div>
//       <div className="bottom-part">
//         <div className="graphical-representation">
//           <div className="line-graph">
//             <LineGraph chartData={userData} />
//           </div>
//         </div>
//         <div className="overall-progress">
//           <AccruedProgress imageSrc={completed} percentage={`${percentageProgress}%`} title={exerciseData.accruedProgress.title} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard2;


import React, { useState } from 'react';
import BoxRepresentation from './BoxRepresentation';
import LineGraph from '../Graphs/LineGraph';
import AccruedProgress from './AccruedProgress';
import { SidebarData } from '../AllData/SidebarData';
import { UserData } from '../AllData/Data';
import target from '../../ImagesFolder/target.png';
import time1 from '../../ImagesFolder/time1.png';
import completed from '../../ImagesFolder/completed.jpg';
import progress from '../../ImagesFolder/progress.jpg';
import remaining from '../../ImagesFolder/remaining.png';

const Dashboard2 = ({ selectedExercise, setSelectedExercise, isMobileView, handleToggleSidebar }) => {
    const exercise = SidebarData[selectedExercise];
    const exerciseData = UserData.find((data) => data.exercise === exercise);

    const labels = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]; // All 12 months as labels

    const target_value = Math.floor(Math.random() * 100);
    const time_value = Math.floor(Math.random() * 100);
    const achieved_value = Math.floor(Math.random() * 100);
    const remaining_value = Math.floor(Math.random() * 100);
 
    const percentageProgress = Math.floor(Math.random() * 100);

    const userData = {
        labels,
        datasets: [
            {
                label: exerciseData.special_label,
                data: generateRandomData(labels.length),
                backgroundColor: exerciseData.backgroundColor,
                tension: 0.4,
            },
        ],
    };

    function generateRandomData(length) {
        const randomData = Array.from({ length }, () => Math.floor(Math.random() * 100));
        return randomData;
    }

    return (
        <div className="dashboard">
            <div className="exercises-display" onClick={handleToggleSidebar}>
                More Exercises
            </div>

            <div className="upper-part">
                <h2>
                    <span className="pre-title">Exercise: </span>
                    {exercise}----- <b>AVERAGE SUMMARY OVER TIME (JAN-DEC)</b>   
                </h2>
               
            </div>
            <div className="box-displays">
                <BoxRepresentation imageSrc={target} percentage={target_value} title={exerciseData.boxRepresentation.target} />
                <BoxRepresentation imageSrc={time1} percentage={`${time_value}hr`} title={exerciseData.boxRepresentation.time_title} />
                <BoxRepresentation imageSrc={progress} percentage={achieved_value} title="Done" />
                {/* <BoxRepresentation imageSrc={remaining} percentage={remaining_value} title="Remaining" /> */}
            </div>
            <div className="bottom-part">
                <div className="graphical-representation">
                    <div className="line-graph">
                        <LineGraph chartData={userData} />
                    </div>
                </div>
                <div className="overall-progress">
                    <AccruedProgress imageSrc={completed} percentage={`${percentageProgress}%`} title={exerciseData.accruedProgress.title} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard2;
