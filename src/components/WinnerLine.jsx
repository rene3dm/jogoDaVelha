import React from 'react'

import './winnerLine.css'

export default props =>{

const drawLine = (axis) => {
    if (axis === false){
        return(
           ''
        )
    }else {
        return  (
         
                <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 100 100" className="line"  xmlns="http://www.w3.org/2000/svg" strokeLinecap="round">
                    <line x1={props.axis[0]} y1={props.axis[1]} x2={props.axis[2]} y2={props.axis[3]} />
                </svg>
        )
    }
}

return(
    <>
        {drawLine(props.axis)}
    </>
)

}