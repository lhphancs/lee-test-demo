import React from 'react';

function LessonTwoComponentThatUsesState() {
    var [currentNumber, setCurrentNumber] = React.useState(50);

    const clickResponse = () => {
        // ++currentNumber; // This does not trigger re-render. Use the setCurrentNumber instead!
        setCurrentNumber(currentNumber + 1);
    }

    return (
        <div>
            <b>{currentNumber}</b>
            <button onClick={clickResponse}>
                Increment
            </button>
        </div>
    );
}

export default LessonTwoComponentThatUsesState;