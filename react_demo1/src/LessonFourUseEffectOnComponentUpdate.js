import React, { useEffect } from 'react';

function LessonFourUseEffectOnComponentUpdate() {
    var [greenNumber, setGreenNumber] = React.useState(0);
    var [redNumber, setRedNumber] = React.useState(0);

    const SayCounts = () => {
        console.log(`Green: ${greenNumber}, Red: ${redNumber}`);
    };

    useEffect(SayCounts, [greenNumber, redNumber]);

    return (
        <div>
            <div style={{backgroundColor: 'green'}}>
                <b>{greenNumber}</b>
                <button onClick={() => setGreenNumber(greenNumber + 1)}>
                    Increment
                </button>
            </div>
            <div style={{backgroundColor: 'red'}}>
                <b>{redNumber}</b>
                <button onClick={() => setRedNumber(redNumber + 1)}>
                    Increment
                </button>
            </div>
        </div>
    );
}

export default LessonFourUseEffectOnComponentUpdate;