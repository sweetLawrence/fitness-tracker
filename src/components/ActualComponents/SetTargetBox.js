import React, { useRef } from 'react'

const SetTargetBox = ({ onTargetChange }) => {
    const target = useRef()
    const achieved = useRef()
    const time_taken = useRef()

    const date = new Date();
    const day = date.getDay();
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const current_day = weekDays[day]
    function handleClick(e) {
        const targetValue = target.current.value;
        const achievedValue = achieved.current.value;
        onTargetChange(targetValue, achievedValue);
        target.current.value = '';
        achieved.current.value = '';

    }
    return (
        <div className='target-box'>
            <h3>{current_day}</h3>

            <div className=" input-z target-input">
                <input type="text" ref={target} placeholder='Enter Target' required className='t-input' />
            </div>
            <div className="input-z achieved">
                <input type="text" ref={achieved} placeholder='Enter Achieved' required className='t-achieved' />
            </div>
            <div className="input-z time-taken">
                <input type="text" ref={time_taken} placeholder='Enter Time Taken' required className='t-time-taken' />
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