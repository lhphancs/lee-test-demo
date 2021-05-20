import React from 'react';

function LessonTwoComponentThatUsesState() {
    var [currentNumber, setCurrentNumber] = React.useState(50);

    const clickResponse = () => {
        // ++currentNumber; // This will not work! Don't do it!
        setCurrentNumber(currentNumber + 1);
    }

    return (
        <div>
            <b>{currentNumber}</b>
            <button onClick={clickResponse}>
                Increment me!
            </button>
        </div>
        
    );
}

export default LessonTwoComponentThatUsesState;