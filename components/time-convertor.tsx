import { getTwentyFourHourTime } from '@/utils/time';
import React, { ChangeEvent, useState } from 'react';

const TimeConvertor = () => {

    const [selectedTime, setSelectedTime] = useState('');
    const [userEnteredTime, setUserEnteredTime] = useState('');

    const [showResult, setShowResult] = useState(false);


    const handleOnTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedTime(e?.target?.value);
        setShowResult(false);
    };

    const handleUserInputTime = (e: ChangeEvent<HTMLInputElement>) => {
        setUserEnteredTime(e?.target?.value);
        setShowResult(false);
    };

    const toggleShow = () => setShowResult(true);

    return (
        <div>
            <div className='container'>
                <input
                    type="time"
                    name="time"
                    placeholder="hrs:mins:ss"
                    pattern="^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$"
                    required
                    onChange={handleOnTimeChange}
                />
            </div>

            {showResult ? <div>Result for selected time: {selectedTime}</div> : null}

            <div className='container'>
                <input
                    className="text-input"
                    type="text"
                    name="text-input"
                    required
                    onChange={handleUserInputTime}
                    placeholder='Enter the time string'
                />
            </div>
            <div className='container'>
                <button onClick={toggleShow} className=' convert-button '>convert</button>
            </div>
            {showResult && userEnteredTime ? <div>Result for entered time: {getTwentyFourHourTime(userEnteredTime)}</div> : null}
        </div>
    );
};

export default TimeConvertor;