import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

// Each nameValuePair can be:
// * Name: <Svg />; or
// * Name: { svg: <Svg />, viewBox: '0 0 50 50' }

const ExitIcons=()=>{
    return(
        <Svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M19 7V4C19 2.34315 17.6569 1 16 1H4C2.34315 1 1 2.34315 1 4V21V22C1 23.6569 2.34315 25 4 25H16C17.6569 25 19 23.6569 19 22V19"
                stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M15.5119 9.74334L19 13.0886L15.5119 16.4338" stroke="white" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M18.7505 13.0506H10.1862" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        </Svg>
    )
}
export {
    ExitIcons

}
