import React from 'react'

import { FaRecycle, FaMicrochip, FaUserFriends, FaAdjust } from 'react-icons/fa'

import './menu.css'

let toggleMenu = true

const changeTheme = (e) =>{
    const html = document.querySelector("html")

    const styleLight = {
        bodyBg: "#f9f9f9",
        headerBg: "#079afc",
        titleCl: "#fdfdfd",
        playerCl: "#079afc",
        textCl: "#333",
        buttonBg:"#e8e8e8"
    }

    const styleDark = {
        bodyBg: "#333",
        headerBg: "#f4d731",
        titleCl: "#222",
        playerCl: "#f4d731",
        textCl: "#f0f0f0",
        buttonBg:"#292929"
    }

    const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


    const changeColors = colors =>{
        Object.keys(colors).map( key =>
            html.style.setProperty(transformKey(key),colors[key])
            )
    }

    if(e.target.checked){
        changeColors(styleDark)
    }else{
        changeColors(styleLight)
    }

}


const playAgain = (props) => {

    if (props.endGame) {
        return (
            <div className="grow">
                <button onClick={(e) => props.reset && props.reset()} className="play-again" >
                    Play Again
                </button>
            </div>
        )
    } else {
        return ''
    }


}

const showMenu = () => {
    const hamburgerBar1 = document.getElementById('bar-1')
    const hamburgerBar2 = document.getElementById('bar-2')
    const hamburgerBar3 = document.getElementById('bar-3')
    const menuItems = document.getElementById('menuItems')
    
    
    if(toggleMenu){
        hamburgerBar1.classList.remove('hamburger-bar-1-animation-end')
        hamburgerBar1.style.WebkitAnimation = 'bar-1 1.5s ease-in-out normal forwards'
        
        hamburgerBar2.classList.remove('hamburger-bar-2-animation-end')
        hamburgerBar2.style.WebkitAnimation = "bar-2 .7s .5s ease-in-out forwards"
        
        hamburgerBar3.classList.remove('hamburger-bar-3-animation-end')
        hamburgerBar3.style.WebkitAnimation = "bar-3 .7s .5s ease-in-out forwards"
        
        menuItems.classList.remove('menuItems-animation-end')
        menuItems.style.WebkitAnimation = 'menu-items-animation .2s 1.5s ease-in-out forwards'
        
        toggleMenu = false
    }else {
        hamburgerBar1.classList.add('hamburger-bar-1-animation-end')
        hamburgerBar1.style.WebkitAnimation = 'bar-1-reverse 1.5s .2s ease-in-out forwards'
        
        hamburgerBar2.classList.add('hamburger-bar-2-animation-end')
        hamburgerBar2.style.WebkitAnimation = 'bar-2-reverse .7s .7s ease-in-out forwards'
    
        hamburgerBar3.classList.add('hamburger-bar-3-animation-end')
        hamburgerBar3.style.WebkitAnimation = 'bar-3-reverse .7s .7s ease-in-out forwards'

        menuItems.classList.add('menuItems-animation-end')
        menuItems.style.WebkitAnimation = 'menu-items-animation-reverse .2s ease-in-out forwards'

        
        toggleMenu = true
    }
    
}

const resetGame = (props) =>{
    return (
        <button onClick={() => props.reset && props.reset()} className="button-items">
            <span className="menu-icon"><FaRecycle className="reset-icon"/></span> Reset Match
        </button>
    )
}

const playerCPU = (props) =>{
    return (
        <button className="button-items" onClick={()=> props.twoPlayer && props.twoPlayer()}>
            <span className="menu-icon"><FaMicrochip className="cpu-icon"/></span> Player X CPU
        </button>
    )
}

const playerPlayer = (props) =>{
    return (
        <button className="button-items" onClick={()=> props.onePlayer && props.onePlayer()}>
            <span className="menu-icon"><FaUserFriends className="user-icon"/></span> Player X Player
        </button>
    )
}

const darkMode = (props) =>{
    return (
        <button className="button-items dark">
            <div className="flex-center">
                <span className="menu-icon"><FaAdjust className="dark-icon"/></span> Dark Mode
            </div>
            <div className="flex-center">
                <input type="checkbox" onChange={changeTheme} name="theme"/>
            </div>
    </button>
    )
}



const hamburgerMenu = (props) =>{
    return(
        <div className="hamburger-menu">   
            <div id='bar-1' className="hamburger-bar-1">
            <div id="menuItems" className="menu-items">
                {resetGame(props)}
                {playerCPU(props)}
                {playerPlayer(props)}
                {darkMode(props)}
            </div>
            </div>
            <div  id='bar-2' className="hamburger-bar-2"></div>
            <div  id='bar-3' className="hamburger-bar-3"></div>

           
    </div>
    )
}



export default props => {

    return (
        <div className="main-menu">
            <button onClick={showMenu} className="button-menu">
            </button>
            {hamburgerMenu(props)}
            {playAgain(props)}
        </div>
    )

}