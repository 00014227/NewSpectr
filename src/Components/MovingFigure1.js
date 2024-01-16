import React from 'react';

function MovingFigure1({isAnimating}) {
    return (
        <svg
        width="633"
        height="223"
        viewBox="0 0 633 223"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            id="path1"
            d="M1 35V10H50.5V35H101.5V10H176V35H203V59.5H271.5V35H302V69.5H356.5V1H382.5V25.5H457V59.5H594.5V84H564V111H622.5V153.5H587.5V212H606"
            stroke="#0ABAB5"
        />
        <path
            id="path2"
            d="M11 35V20H60.5V45H111.5V20H186V45H213V69.5H281.5V45H312V79.5H366.5V11H392.5V35.5H467V69.5H604.5V94H574V121H632.5V163.5H597.5V222H604.5"
            stroke="#0ABAB5"
        />

        {/* First Smaller Star */}
        <polygon points="0,0 -2,6 -6,6 -3,10 -5,16 0,12 5,16 3,10 6,6 2,6" fill="#0ABAB5">
            <animateMotion
                dur="5s"
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
                begin={isAnimating ? '0s' : 'indefinite'}
            >
                <mpath href="#path1" />
            </animateMotion>
        </polygon>

        {/* Second Smaller Star */}
        <polygon points="20,0 18,6 14,6 17,10 15,16 20,12 25,16 23,10 26,6 22,6" fill="#0ABAB5">
            <animateMotion
                dur="5s"
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
                begin={isAnimating ? '2s' : 'indefinite'}
            >
                <mpath href="#path1" />
            </animateMotion>
        </polygon>

        {/* Third Smaller Star */}
        <polygon points="40,0 38,6 34,6 37,10 35,16 40,12 45,16 43,10 46,6 42,6" fill="#0ABAB5">
            <animateMotion
                dur="5s"
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
                begin={isAnimating ? '4s' : 'indefinite'}
            >
                <mpath href="#path1" />
            </animateMotion>
        </polygon>

        {/* Fourth Smaller Star */}
        <polygon points="60,0 58,6 54,6 57,10 55,16 60,12 65,16 63,10 66,6 62,6" fill="#0ABAB5">
            <animateMotion
                dur="5s"
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
                begin={isAnimating ? '6s' : 'indefinite'}
            >
                <mpath href="#path1" />
            </animateMotion>
        </polygon>

        {/* Fifth Smaller Star */}
        <polygon points="80,0 78,6 74,6 77,10 75,16 80,12 85,16 83,10 86,6 82,6" fill="#0ABAB5">
            <animateMotion
                dur="5s"
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
                begin={isAnimating ? '8s' : 'indefinite'}
            >
                <mpath href="#path1" />
            </animateMotion>
        </polygon>
    </svg>
    );
}

export default MovingFigure1;