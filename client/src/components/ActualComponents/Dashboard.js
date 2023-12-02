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
  const [data, setData] = useState([
    // Your initial data array
  ]);

  const [transformedData, setTransformedData] = useState([]);

  // const [userData, setUserData] = useState({
  //   labels: [],
  //   datasets: [
  //     {
  //       label: 'Users gained',
  //       data: [],
  //       backgroundColor: [],
  //       tension: 0.4,
  //     },
  //   ],
  // });

  const [bmi, setBmi] = useState(0);
  useEffect(() => {
    const fetchInputData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/insert', {
          headers: {
            'accessToken': localStorage.getItem("accessToken"),
          },
        });
        // console.log("RD",response.data);
        // setData(response.data)





        // .................
        function mergeObjectsWithSameExerciseIdAndDay(arr) {
          const resultMap = new Map();

          // Iterate through the array
          arr.forEach(obj => {
            const { exerciseId, target, timeTaken, achieved, dayOfWeek } = obj;

            // Create a unique key based on exerciseId and dayOfWeek
            const key = `${exerciseId}-${dayOfWeek}`;

            // Check if the key is already present in the map
            if (resultMap.has(key)) {
              // If present, accumulate target, timeTaken, and achieved values
              resultMap.set(key, {
                ...resultMap.get(key),
                target: resultMap.get(key).target + target,
                timeTaken: resultMap.get(key).timeTaken + timeTaken,
                achieved: resultMap.get(key).achieved + achieved,
              });
            } else {
              // If not present, add a new entry to the map
              resultMap.set(key, { ...obj });
            }
          });

          // Convert the map values back to an array
          const resultArray = Array.from(resultMap.values());

          return resultArray;
        }
      
        
        // Example usage:
        const inputArray = [
          {
            achieved: 10,
            createdAt: "2023-12-02T17:35:14.000Z",
            date: "2023-12-02T00:00:00.000Z",
            dayOfWeek: "Wednesday",
            exerciseId: 1,
            id: 1,
            month: "December",
            target: 10,
            timeTaken: 2,
            updatedAt: "2023-12-02T17:35:14.000Z",
            userId: 1,
          },
          // Add more objects as needed
        ];

        const mergedArray = mergeObjectsWithSameExerciseIdAndDay(response.data);
        // console.log("MA", mergedArray);


        // ..........................
        const lastEntry = response.data[response.data.length - 1];
        if (lastEntry) {
          const _bmi=(lastEntry.weight)/(Math.pow(lastEntry.height,2))
          setBmi(_bmi)
        }

        setTransformedData(response.data);
      } catch (error) {
        console.error('Error fetching input data:', error);
      }
    };

    fetchInputData();
  }, [selectedExercise]);

  console.log("xxx", transformedData)
  // const dayIndices = {
  //   Sunday: 0,
  //   Monday: 1,
  //   Tuesday: 2,
  //   Wednesday: 3,
  //   Thursday: 4,
  //   Friday: 5,
  //   Saturday: 6,
  // };

  // const sortedInputData = inputData.slice().sort((a, b) => dayIndices[b.dayOfWeek] - dayIndices[a.dayOfWeek]);

  // // console.log("Here", sortedInputData);
  // // console.log("Here22", inputData);

  // let selectedExerciseData;
  // if (Array.isArray(transformedData) && transformedData.length > 0) {
  //   selectedExerciseData = transformedData.find((data) => data.exerciseId === selectedExercise + 1);
  // } else {
  //   selectedExerciseData = null;
  // }

  // Get the current day of the week
  const currentDayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  // Find the selected exercise data for the current day
  let selectedExerciseDataForCurrentDay;
  if (Array.isArray(transformedData) && transformedData.length > 0) {
    selectedExerciseDataForCurrentDay = transformedData
      .filter((data) => data.dayOfWeek === currentDayOfWeek && data.exerciseId === selectedExercise + 1)
      .pop(); // Use pop() to get the last object of the filtered array
  } else {
    selectedExerciseDataForCurrentDay = null;
  }

  // Use the selectedExerciseDataForCurrentDay for display
  const target_value = selectedExerciseDataForCurrentDay ? selectedExerciseDataForCurrentDay.target : 0;
  const time_value = selectedExerciseDataForCurrentDay ? selectedExerciseDataForCurrentDay.timeTaken : 0;
  const achieved_value = selectedExerciseDataForCurrentDay ? selectedExerciseDataForCurrentDay.achieved : 0;
  const remaining_value = selectedExerciseDataForCurrentDay ? (selectedExerciseDataForCurrentDay.target - selectedExerciseDataForCurrentDay.achieved) : 0;
  const percentageProgress = selectedExerciseDataForCurrentDay ? Math.floor(((selectedExerciseDataForCurrentDay.achieved / selectedExerciseDataForCurrentDay.target) * 100)) : 0;


  // const target_value = selectedExerciseData ? selectedExerciseData.target : 0;
  // const time_value = selectedExerciseData ? selectedExerciseData.timeTaken : 0;
  // const achieved_value = selectedExerciseData ? selectedExerciseData.achieved : 0;
  // const remaining_value = selectedExerciseData ? (selectedExerciseData.target - selectedExerciseData.achieved) : 0;
  // const percentageProgress = selectedExerciseData ? Math.floor(((selectedExerciseData.achieved / selectedExerciseData.target) * 100)) : 0;

  // // Get the dates for the current week
  // const datesForWeek = getDatesForCurrentWeek();

  // // Map the achieved values to the days of the week
  // const achievedValuesForWeek = datesForWeek.map((day) => {
  //   const dayData = sortedInputData.find((data) => data.dayOfWeek === day.dayOfWeek && data.exerciseId === selectedExercise + 1);
  //   return dayData ? dayData.achieved : 0;
  // });

  // // Update the chart data for the current week
  // useEffect(() => {
  //   setUserData({
  //     labels: datesForWeek.map((day) => day.dayOfWeek), // Days of the week
  //     datasets: [
  //       {
  //         label: "Achieved",
  //         data: achievedValuesForWeek,
  //         backgroundColor: exerciseData.backgroundColor,
  //         tension: 0.4,
  //       },
  //     ],
  //   });
  // }, [exercise, inputData, achievedValuesForWeek]);



  // const mapDataToDays = () => {
  //   const daysArray = UserData[selectedExercise].labels;
  //   const achievedArray = daysArray.map((day) => {
  //     const dayData = transformedData.find((data) => data.dayOfWeek === day && data.exerciseId === selectedExercise + 1);
  //     return dayData ? dayData.achieved : 0;
  //   });
  //   return achievedArray;
  // };


  // const mapDataToDays = () => {
  //   const daysArray = UserData[selectedExercise].labels;
  //   const achievedArray = daysArray.map((day, index) => {
  //     const dayData = transformedData.find((data) => data.dayOfWeek === day && data.exerciseId === selectedExercise + 1);
  //     // const dayData = transformedData
  //     return dayData ? dayData.achieved : 0;
  //   });


  const mapDataToDays = () => {
    const daysArray = UserData[selectedExercise].labels;

    const lastValuesByDay = daysArray.map((day) => {
      // Filter the transformedData array to get entries for the current day
      const entriesForDay = transformedData.filter((data) => data.dayOfWeek === day && data.exerciseId === selectedExercise + 1);

      // If there are entries for the current day, return the achieved value from the last entry
      if (entriesForDay.length > 0) {
        return entriesForDay[entriesForDay.length - 1].achieved;
      }

      // If there are no entries for the current day, return 0
      return 0;
    });

    return lastValuesByDay;
  };


  // transformedData
  // .filter((data) => data.dayOfWeek === currentDayOfWeek && data.exerciseId === selectedExercise + 1)
  // .pop();

  // Find the index where a new week starts
  //   const startIndex = achievedArray.findIndex((value, index, array) => {
  //     if (index > 0) {
  //       const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  //       const previousDay = daysArray[(index - 1) % daysArray.length];
  //       return currentDay === 'Sunday' && previousDay === 'Saturday';
  //     }
  //     return false;
  //   });

  //   // If a new week is found, adjust the achievedArray
  //   if (startIndex !== -1) {
  //     const slicedArray = achievedArray.slice(startIndex).concat(achievedArray.slice(0, startIndex));
  //     return slicedArray;
  //   }

  //   return achievedArray;
  // };

  const [userData, setUserData] = useState({
    labels: UserData[selectedExercise].labels,
    datasets: [
      {
        label: exerciseData.special_label,
        data: mapDataToDays(),
        backgroundColor: exerciseData.backgroundColor,
        tension: 0.4,
      },
    ],
  });
  useEffect(() => {
    setUserData({
      labels: UserData[selectedExercise].labels,
      datasets: [
        {
          label: exerciseData.special_label,
          data: mapDataToDays(),
          backgroundColor: exerciseData.backgroundColor,
          tension: 0.4,
        },
      ],
    });
  }, [selectedExercise, transformedData]);

  return (
    <div className="dashboard">
      <div className="exercises-display" onClick={handleToggleSidebar}>
        More Exercises
      </div>

      <div className="upper-part">

        <h2>
          <span className="pre-title">Exercise: </span>
          {exercise}
          {","}
          {/* <br /> */}
          <span className='bmi'>BMI:{bmi}</span>
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
