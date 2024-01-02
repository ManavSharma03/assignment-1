import { countCharacters } from '@/utils/characters';
import React, { useState } from 'react';

const CharacterCounter = () => {

    const [showResult, setShowResult] = useState(false)
    const [testString, setTestString] = useState('');
    const toggleShow = () => setShowResult(true);

    return (
        <div>
            <input
                className="text-input"
                type="text"
                value={testString}
                onChange={(e) => setTestString(e.target.value)}
            />
            {showResult ? <div>Result: {countCharacters(testString)}</div> : null}

            <div className='container'>
                <button onClick={toggleShow} className=' convert-button '>convert</button>
            </div>
        </div>

    );
};

export default CharacterCounter;