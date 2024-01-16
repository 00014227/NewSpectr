import React from 'react';

const MovingFigure2 = ({isAnimating}) => {
    return (
        <svg width="1486" height="332" viewBox="0 0 1486 332" fill="none" xmlns="http://www.w3.org/2000/svg">

        <path d="M0 17H37.5V24H59.5V10.5H84V21H109.5V29H164.5V37.5H209V48.5H226.5V57H254V44H274.5V61H343.5V69.5H359V79.5H390.5V91.5H428.5V112H454.5V126H443.5V148H458.5V182H443.5V212H481.5V232.5H548.5V254H538.5V284H555.5V307.5H619V293H667.5V311H709.5V331.5H775.5V293H822.5V315H863V283.5H978.5V300.5H961.5V325.5H1043V284H1110V311H1253.5V293H1224.5V268H1297.5V232.5H1391.5V200.5H1337.5V177H1370.5V154.5H1407V124H1446.5V142H1486" stroke="#0ABAB5" />
        <path id="motionPath" d="M0 7H27.5V14H49.5V0.5H74V11H99.5V19H154.5V27.5H199V38.5H216.5V47H244V34H264.5V51H333.5V59.5H349V69.5H380.5V81.5H418.5V102H444.5V116H433.5V138H448.5V172H433.5V202H471.5V222.5H538.5V244H528.5V274H545.5V297.5H609V283H657.5V301H699.5V321.5H765.5V283H812.5V305H853V273.5H968.5V290.5H951.5V315.5H1033V274H1100V301H1243.5V283H1214.5V258H1287.5V222.5H1381.5V190.5H1327.5V167H1360.5V144.5H1397V114H1436.5V132H1486" stroke="#0ABAB5" />

        <polygon points="0,12.5 2.5,0 5,12.5 0,5 5,5 0,12.5 -5,5 -2.5,0" fill="#0ABAB5">

            <animateMotion dur="10s" repeatCount="indefinite" begin={isAnimating ? '0s' : 'indefinite'}>
                <mpath href="#motionPath" />
            </animateMotion>
        </polygon>

        <polygon points="10,12.5 12.5,0 15,12.5 10,5 15,5 10,12.5 5,5 7.5,0" fill="#0ABAB5">
            <animateMotion dur="10s" repeatCount="indefinite" begin={isAnimating ? '2s' : 'indefinite'}>
                <mpath href="#motionPath" />
            </animateMotion>
        </polygon>



        <polygon points="20,12.5 22.5,0 25,12.5 20,5 25,5 20,12.5 15,5 17.5,0" fill="#0ABAB5">
            <animateMotion dur="10s" repeatCount="indefinite" begin={isAnimating ? '4s' : 'indefinite'}>
                <mpath href="#motionPath" />
            </animateMotion>
        </polygon>

        <polygon points="30,12.5 32.5,0 35,12.5 30,5 35,5 30,12.5 25,5 27.5,0" fill="#0ABAB5">
            <animateMotion dur="10s" repeatCount="indefinite " begin={isAnimating ? '6s' : 'indefinite'}>
                <mpath href="#motionPath" />
            </animateMotion>
        </polygon>


        <polygon points="40,12.5 42.5,0 45,12.5 40,5 45,5 40,12.5 35,5 37.5,0" fill="#0ABAB5">
            <animateMotion dur="10s" repeatCount="indefinite" begin={isAnimating ? '8s' : 'indefinite'}>
                <mpath href="#motionPath" />
            </animateMotion>
        </polygon>


        {/* <polygon points="50,12.5 52.5,0 55,12.5 50,5 55,5 50,12.5 45,5 47.5,0" fill="#0ABAB5">
<animateMotion dur="10s" repeatCount="indefinite"         begin={isAnimating ? '10s' : 'indefinite'}>
<mpath href="#motionPath" />
</animateMotion>
</polygon> */}


        <polygon points="60,12.5 62.5,0 65,12.5 60,5 65,5 60,12.5 55,5 57.5,0" fill="#0ABAB5">
            <animateMotion dur="10s" repeatCount="indefinite" begin={isAnimating ? '11s' : 'indefinite'}>
                <mpath href="#motionPath" />
            </animateMotion>
        </polygon>


    </svg>
    );
};

export default MovingFigure2;