import React, { useRef } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const SetTargetBox = ({ onTargetChange, exerciseId }) => {
    const navigate = useNavigate()

    const target = useRef()
    const achieved = useRef()
    const timeTaken = useRef()
    const weight = useRef()
    const height = useRef()

    const date = new Date();
    const day = date.getDay();
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const date_ = date.toISOString().slice(0, 10);
    // const month = date.getMonth();

    const current_day = weekDays[day]
    function handleClick(e) {
        const targetValue = Number(target.current.value);
        const achievedValue = Number(achieved.current.value);
        const timeValue = Number(timeTaken.current.value);
        const weightValue = Number(weight.current.value);
        const heightValue = Number(height.current.value);


        // Create a new Date object
        const date = new Date();

        // Get the year, month, and day from the date
        const year = date.getFullYear();
        // JavaScript months are 0-based, so add 1 to get the correct month
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');

        // Format the date as "YYYY-MM-DD"
        const formattedDate = `${year}-${month}-${day}`;
        const currentDate = new Date();
        const currentMonth = currentDate.toLocaleString('default', { month: 'long' });

        const inputsData = {
            target: targetValue,
            achieved: achievedValue,
            timeTaken: timeValue,
            exerciseId: exerciseId,
            dayOfWeek: current_day,
            date: formattedDate,
            month:currentMonth,
            weight:weightValue,
            height:heightValue

        }

        console.log("Sending data to the server:", inputsData);
        axios.post(`http://localhost:3001/insert`, { inputsData },
            {
                headers: {
                    accessToken: localStorage.getItem("accessToken")
                }
            }
        ).then((response) => {
            console.log("Response from server:", response.data);
            if (response.data.error) {
                console.log(response.data.error)
            } else {
                console.log("Sent successful. A.t:", response.data);
            }

        })

        // axios post end

        onTargetChange(targetValue, achievedValue, timeTaken);
        target.current.value = '';
        achieved.current.value = '';
        timeTaken.current.value = '';
        weight.current.value = '';
        height.current.value = '';

        navigate("/analytics")

    }

    return (
        <div className='target-box'>
            <h3>{current_day} - {date_}</h3>

            <div className=" input-z target-input">
                <input type="number" ref={target} placeholder='Enter Target' required className='t-input' />
            </div>
            <div className="input-z achieved">
                <input type="number" ref={achieved} placeholder='Enter Achieved' required className='t-achieved' />
            </div>
            <div className="input-z time-taken">
                <input type="number" ref={timeTaken} placeholder='Enter Time Taken' required className='t-time-taken' />
            </div>
            <div className="input-z time-taken">
                <input type="number" ref={weight} placeholder='Enter Current Weight (kg)' required className='t-time-taken' />
            </div>
            <div className="input-z time-taken">
                <input type="number" ref={height} placeholder='Enter Current Height (Metres)' required className='t-time-taken' />
            </div>
            <div className="btn">

                <button type='submit' onClick={() => {
                    if (target.current.value !== "" && achieved.current.value !== "") {
                        handleClick()

                    }
                }}>Submit</button>

            </div>
        </div>
    )
}

export default SetTargetBox