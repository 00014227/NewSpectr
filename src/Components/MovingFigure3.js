import React from 'react';

const MovingFigure3 = ({ isAnimating }) => {
  return (
    <svg width="615" height="443" viewBox="0 0 615 443" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Define the motion path using the first path in the SVG */}
      <path d="M1 0.5V15.5H59.5V33.5H85V15.5H115V33.5H194V56.5H332.5V103H391.5V127.5H368.5V201.5H400V279H494V320.5H454.5V368H494V399.5H454.5V422.5H599.5V442.5H615" stroke="#0ABAB5" />
      <path id="motionPaths" d="M11 0.5V5.5H69.5V23.5H95V5.5H125V23.5H204V46.5H342.5V93H401.5V117.5H378.5V191.5H410V269H504V310.5H464.5V358H504V389.5H464.5V412.5H609.5V432.5H615" stroke="#0ABAB5" />

      {/* The star with 8 sides (octagram) that will move along the motion path */}
      <polygon points="0,12.5 2.5,0 5,12.5 0,5 5,5 0,12.5 -5,5 -2.5,0" fill="#0ABAB5">
        {/* Animate the star's motion along the path */}
        <animateMotion dur="10s" repeatCount="indefinite" begin={isAnimating ? '0s' : 'indefinite'}>
          <mpath href="#motionPaths" />
        </animateMotion>
      </polygon>

      {/* Second star */}
      <polygon points="10,12.5 12.5,0 15,12.5 10,5 15,5 10,12.5 5,5 7.5,0" fill="#0ABAB5">
        <animateMotion dur="10s" repeatCount="indefinite" begin={isAnimating ? '2s' : 'indefinite'}>
          <mpath href="#motionPaths" />
        </animateMotion>
      </polygon>

      {/* Third star */}
      <polygon points="20,12.5 22.5,0 25,12.5 20,5 25,5 20,12.5 15,5 17.5,0" fill="#0ABAB5">
        <animateMotion dur="10s" repeatCount="indefinite" begin={isAnimating ? '4s' : 'indefinite'}>
          <mpath href="#motionPaths" />
        </animateMotion>
      </polygon>

      {/* Fourth star */}
      <polygon points="30,12.5 32.5,0 35,12.5 30,5 35,5 30,12.5 25,5 27.5,0" fill="#0ABAB5">
        <animateMotion dur="10s" repeatCount="indefinite" begin={isAnimating ? '6s' : 'indefinite'}>
          <mpath href="#motionPaths" />
        </animateMotion>
      </polygon>




    </svg>
  );
}

export default MovingFigure3;
