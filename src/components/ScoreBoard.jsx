import React from 'react'
import {FaTimes, FaRegCircle} from 'react-icons/fa'

import './scoreBoard.css'

export default props => {


    return (
        <div className="score-board">
            <label>Player <FaTimes className="icon-x" /> wins: {props.wins[0]}</label>
            <label>Player <FaRegCircle className="icon-o" /> wins: {props.wins[1]}</label>
        </div>
    )
}