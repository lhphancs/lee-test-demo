import React, { useEffect } from 'react';

function LessonThreeUseEffectOnComponentMount() {
    const SayHello = () => {
        console.log("Hello!");
    };

    useEffect(SayHello, []);

    return (
        <div>
            
        </div>
    );
}

export default LessonThreeUseEffectOnComponentMount;