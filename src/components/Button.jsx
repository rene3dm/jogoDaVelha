import React from 'react'
import {FaTimes, FaRegCircle} from 'react-icons/fa'

import './button.css'
export default props => {

    const playerAvatar = avatar => {
        switch (avatar){
            case 0:
                return ''
            case 1:
                return  <FaTimes className="player1"/>
            case 2:
                return  <FaRegCircle className="player2"/>
            default:
                return '' 

        }
    }

    return(
        <button className="button" onClick={ e => props.click && props.click(props.data[0],props.data[1]) }>
           {playerAvatar(props.playerAvatar)}
        </button>
    )
}