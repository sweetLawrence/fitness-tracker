import React from 'react'
import { Bar } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

const BarGraph = ({chartData}) => {
    return <Bar data={chartData} />
}

export default BarGraph




@media screen and (max-width: 768px) {
  .App {
    /* background: red; */
    /* overflow-x: auto; */
    scale: 1;
  }
  body {
    /* overflow: auto; */
  }
  .homepage {
  }
  .homepage .div1 {
    display: none;
  }
  .homepage .div2 {
    width: 100%;
  }
  .homepage .div2 .select-login-type {
    margin-bottom: 0.01em;
  }
  .selection {
    /* width: 10%; */
  }

  .selection2 {
    width: 100%;
  }
  .exercises-display{
    display: block  ;
  }

  .selection {
    width: 0%;
  }

  /* Hide the sidebar content while keeping the space for it */
  /* .selection ul .row {
    visibility: hidden;
    /* background: #e6e4e4; */
  /* }
  .selection h3 {
    visibility: hidden;
  } */ */

  /* Optionally, you can set the padding and margin to 0 to remove any extra space */
  /* .selection ul .row {
    padding: 0;
    margin: 0;
  } */

  .dashboard {
    display: inline-block;
  }
  .dashboard .upper-part {
    height: 9vh;
    /* background: magenta; */
    width: 100%;
    /* position: sticky; */
  }

  .dashboard .box-displays {
    height: 50vh;
    /* overflow-x: auto; */
    align-items: center;
    /* width: 50%; */
    display: inline-block;
    /* padding: 0 50% 0 50%; */
    /* flex-direction: column; */
  }

  .dashboard .bottom-part {
    /* height: 45vh; */
    width: 100%;
    align-items: center;
    display: inline-block;
    margin-top: 120%;
    /* background-color: black; */
    /* overflow-x: auto; */
  }
  .dashboard .bottom-part .graphical-representation {
    width: 90%;
    /* background: red; */
    /* display: none; */
    margin-left: 1em;
    height: 300px;
  }
  .box-representation {
    /* background-color: #ffffff; */
    width: 90%;
    height: 175px;
    /* margin: .6em auto; */

    margin: 1em;

    /* margin: .4em; */
  }

  .exercises-display{
    display: inline;
  }

  .dashboard {
    /* background-color: red; */
    height: auto;
    overflow: auto;
  }

  .infofeed-dash {
    /* background-color: red; */
    height: auto;
    overflow-y: auto;
  }
  .line-graph {
    width: 100%;
    height: 400px;
    margin: 50% 60% 0 30%;
    padding: 0;
    
    /* background: green; */
  }

  .box-representation-acc {
    width: 270%;
  }
  .navbar2 .bars{
    visibility: visible;
    margin-right: 1.5em;
  }
  .navbar2 .analytics{
   display: none;
  }

  .selection {
    position: fixed;
    top: 0;
    left: -100%;
    width: 70%;
    max-width: 300px;
    height: 100%;
    background-color: #fbfbfb;
    z-index: 999;
    transition: left 0.3s ease-in-out;
  }

  .show-sidebar {
    left: 0;
  }

}
