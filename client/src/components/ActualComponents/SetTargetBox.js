import React, { useRef } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const SetTargetBox = ({ onTargetChange, exerciseId}) => {
    const navigate = useNavigate()
    const target = useRef()
    const achieved = useRef()
    const timeTaken = useRef()

    const date = new Date();
    const day = date.getDay();
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const date_ = date.toISOString().slice(0, 10);

    const current_day = weekDays[day]
    function handleClick(e) {
        const targetValue = Number(target.current.value);
        const achievedValue = Number(achieved.current.value);
        const timeValue = Number(timeTaken.current.value);

        const inputsData = {
            target:targetValue,
            achieved:achievedValue,
            timeTaken:timeValue,
            exerciseId:exerciseId,
            dayOfWeek:current_day,
      
        }

        console.log("Sending data to the server:", inputsData);
        axios.post(`http://localhost:3001/insert`, { inputsData},
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

        onTargetChange(targetValue, achievedValue,timeTaken);
        target.current.value = '';
        achieved.current.value = '';
        timeTaken.current.value = '';

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