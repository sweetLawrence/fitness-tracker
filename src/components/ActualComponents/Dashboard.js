import React, { useState, useEffect } from 'react';
import BoxRepresentation from './BoxRepresentation';
import time from '../../ImagesFolder/hours.png';
import progress from '../../ImagesFolder/progress.jpg';
import remaining from '../../ImagesFolder/remaining.png';
import target from '../../ImagesFolder/target.png';
import { UserData } from '../AllData/Data';
import LineGraph from '../Graphs/LineGraph';
import AccruedProgress from './AccruedProgress';
import { SidebarData } from '../AllData/SidebarData';

const Dashboard = ({ selectedExercise }) => {
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

  useEffect(() => {
    const selectedData = UserData.find((data) => data.exercise === exercise);
    setUserData({
      labels: selectedData.labels,
      datasets: [
        {
          label: selectedData.special_label,
          data: selectedData.userGain,
          backgroundColor: selectedData.backgroundColor,
          tension: 0.4,
        },
      ],
    });
  }, [exercise]);

  return (
    <div className="dashboard">
      <div className="upper-part">
        <h2>
          <span className="pre-title">Exercise:</span>
          {exercise}
        </h2>
      </div>
      <div className="box-displays">
        <BoxRepresentation
          imageSrc={target}
          percentage={exerciseData.boxRepresentation.percentage}
          title={exerciseData.boxRepresentation.target}
        />
        <BoxRepresentation
          imageSrc={time}
          percentage={exerciseData.boxRepresentation.time}
          title={exerciseData.boxRepresentation.time_title}
        />
        <BoxRepresentation
          imageSrc={progress}
          percentage={exerciseData.boxRepresentation.progress}
          title={exerciseData.boxRepresentation.progress_title}
        />
        <BoxRepresentation
          imageSrc={remaining}
          percentage={exerciseData.boxRepresentation.remaining}
          title="Remaining"
        />
      </div>
      <div className="bottom-part">
        <div className="graphical-representation">
          <div style={{ width: '600px', height: '300px' }}>
            <LineGraph chartData={userData} />
          </div>
        </div>
        <div className="overall-progress">
          <AccruedProgress
            imageSrc={time}
            percentage={exerciseData.accruedProgress.percentage}
            title={exerciseData.accruedProgress.title}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;