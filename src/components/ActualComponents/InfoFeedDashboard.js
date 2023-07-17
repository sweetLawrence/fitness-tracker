// import React, { useState, useEffect, useRef } from 'react';
// import { SidebarData } from '../AllData/SidebarData';
// import SetTargetBox from './SetTargetBox';

// const InfoFeedDashboard = ({ selectedExercise }) => {
//     const exercise = SidebarData[selectedExercise];
//     const [targetValue, setTargetValue] = useState('');
//     const [achievedValue, setAchievedValue] = useState('');

//     const handleTargetChange = (target, achieved) => {
//         setTargetValue(target);
//         setAchievedValue(achieved)

//         const exerciseData = {
//             userGain: [target, achieved],
//         };

//         fetch(`http://localhost:8000/${exercise}/${selectedExercise+1}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(exerciseData),
//         })
//             .then(response => response.json())
//             .then(data => {

//                 console.log('Exercise data updated:', data);
//             })
//             .catch(error => {

//                 console.error('Error updating exercise data:', error);
//             });
//     };




//     return (
//         <div className="dashboard infofeed-dash">
//             <h3>{exercise}{ }</h3>
//             <SetTargetBox onTargetChange={handleTargetChange} />
//             <div className="show">{exercise}{targetValue}{achievedValue}</div>
//         </div>
//     );
// };

// export default InfoFeedDashboard;



import React, { useState } from 'react';
import { SidebarData } from '../AllData/SidebarData';
import SetTargetBox from './SetTargetBox';

const InfoFeedDashboard = ({ selectedExercise }) => {
    const exercise = SidebarData[selectedExercise];
    const [targetValue, setTargetValue] = useState('');
    const [achievedValue, setAchievedValue] = useState('');

    const handleTargetChange = (target, achieved) => {
        setTargetValue(target);
        setAchievedValue(achieved);

        const exerciseData = {
            userGain: [target, achieved],
        };

        fetch(`http://localhost:8000/${exercise}/${selectedExercise + 1}`, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(existingData => {
                const updatedUserGain = [...existingData.userGain, ...exerciseData.userGain];
                if (existingData.userGain.length >= 7) {
                    existingData.userGain = [existingData.userGain[existingData.userGain.length - 1]];
                }


                const updatedExerciseData = {
                    ...existingData,
                    userGain: updatedUserGain,
                };

                console.log("wewewe", existingData.userGain)

                fetch(`http://localhost:8000/${exercise}/${selectedExercise + 1}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedExerciseData),
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Exercise data updated:', data);
                    })
                    .catch(error => {
                        console.error('Error updating exercise data:', error);
                    });
            })
            .catch(error => {
                console.error('Error retrieving existing exercise data:', error);
            });
    };

    return (
        <div className="dashboard infofeed-dash">
            <h3>{exercise}</h3>
            <SetTargetBox onTargetChange={handleTargetChange} />
            <div className="show">
                {/* {exercise} {targetValue} {achievedValue} */}
            </div>
        </div>
    );
};

export default InfoFeedDashboard;

