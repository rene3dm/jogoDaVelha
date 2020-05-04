import React, { useState, useEffect } from 'react'

import './board.css'

import InkBoard from './InkBoard'
import ScoreBoard from './ScoreBoard'
import Button from './Button'
import WinnerLine from './WinnerLine'
import Menu from './Menu'

export default props => {

     let paused = false
     
     const initalGame = [0, 0, 0, 0, 0, 0, 0, 0, 0]

     const [twoPlayer , setTwoPlayer] = useState(false)

     const [toggleInkBoardAnimation, setToggleInkBoardAnimation]  = useState(true)

     const [ initialPlayer, setInitialPlayer ] = useState(1)

     const [ wins, setWins] = useState([0,0])

     const [ endGame, setEndGame ] = useState(false)

     const [game, setGame] = useState(initalGame)

     const [currentPlayer, setCurrentPlayer] = useState(initialPlayer)

     const [ positionLine, setPositionLine ] = useState(false) 

     const reset = () => {
          const inkBoard = document.querySelectorAll('.svg-board')
          const inkBoardPath = document.querySelectorAll('.svg-board path')
          console.log(inkBoard)
          if (toggleInkBoardAnimation){
               inkBoard[0].style.WebkitAnimation = 'path-blur-reset .5s forwards'
               inkBoardPath[0].style.WebkitAnimation = 'path-color-reset 2s forwards linear'
               setToggleInkBoardAnimation(false)
          }else{
               inkBoard[0].style.WebkitAnimation = 'path-blur .5s forwards'
               inkBoardPath[0].style.WebkitAnimation = 'path-color 2s forwards linear'
               setToggleInkBoardAnimation(true)
          }
          
          setGame(initalGame)
          setEndGame(false) 
          setInitialPlayer((initialPlayer === 1) ? 2 : 1)
          setCurrentPlayer((initialPlayer === 1) ? 2 : 1)
          setPositionLine(false)
     }

     const setPlayer = () => setCurrentPlayer((currentPlayer === 1) ? 2 : 1)

     const winner = (gameTemp) =>{
          if (gameTemp[0] === 1 && gameTemp[1] === 1 && gameTemp[2] === 1 ){
               addWins(0)
               setPositionLine([2,16.5,98,16.5])
               return
          } else if (gameTemp[3] === 1 && gameTemp[4] === 1 && gameTemp[5] === 1 ){
               addWins(0)
               setPositionLine([2,49.5,98,49.5])
               return
          }else if (gameTemp[6] === 1 && gameTemp[7] === 1 && gameTemp[8] === 1 ){
               addWins(0)
               setPositionLine([2,82.5,98,82.5])
               return
          }else if (gameTemp[0] === 1 && gameTemp[3] === 1 && gameTemp[6] === 1 ){
               addWins(0)
               setPositionLine([17,1,17,96])
               return
          }else if (gameTemp[1] === 1 && gameTemp[4] === 1 && gameTemp[7] === 1 ){
               addWins(0)
               setPositionLine([50,1,50,96])
               return
          }else if (gameTemp[2] === 1 && gameTemp[5] === 1 && gameTemp[8] === 1 ){
               addWins(0)
               setPositionLine([83,1,83,96])
               return
          }else if (gameTemp[0] === 1 && gameTemp[4] === 1 && gameTemp[8] === 1 ){
               addWins(0)
               setPositionLine([3,3,98,98])
               return
          }else if (gameTemp[2] === 1 && gameTemp[4] === 1 && gameTemp[6] === 1 ){
               addWins(0)
               setPositionLine([98,2,2,98])
               return
          }

          if (gameTemp[0] === 2 && gameTemp[1] === 2 && gameTemp[2] === 2 ){
               addWins(1)
               setPositionLine([2,16.5,98,16.5])
               return
          } else if (gameTemp[3] === 2 && gameTemp[4] === 2 && gameTemp[5] === 2 ){
               addWins(1)
               setPositionLine([2,49.5,98,49.5])
               return
          }else if (gameTemp[6] === 2 && gameTemp[7] === 2 && gameTemp[8] === 2 ){
               addWins(1)
               setPositionLine([2,82.5,98,82.5])
               return
          }else if (gameTemp[0] === 2 && gameTemp[3] === 2 && gameTemp[6] === 2 ){
               addWins(1)
               setPositionLine([17,1,17,96])
               return
          }else if (gameTemp[1] === 2 && gameTemp[4] === 2 && gameTemp[7] === 2 ){
               addWins(1)
               setPositionLine([50,1,50,96])
               return
          }else if (gameTemp[2] === 2 && gameTemp[5] === 2 && gameTemp[8] === 2 ){
               addWins(1)
               setPositionLine([83,1,83,96])
               return
          }else if (gameTemp[0] === 2 && gameTemp[4] === 2 && gameTemp[8] === 2 ){
               addWins(1)
               setPositionLine([3,3,98,98])
               return
          }else if (gameTemp[2] === 2 && gameTemp[4] === 2 && gameTemp[6] === 2 ){
               addWins(1)
               setPositionLine([98,2,2,98])
               return
          }
          
          const drawgame =  gameTemp.reduce((played,element) => {
               if (element > 0){
                    return played && true
               }else{
                    return played && false
               }
          })

          setEndGame(drawgame)

          
     }

     const addWins = (player) => {
          const winsTemp = [ ...wins]
          winsTemp[player] +=1 
          setWins(winsTemp)
          setEndGame(true) 
     }

     const CpuPlay = () =>  Math.floor(Math.random() * 10)
     
     

     const CpuPlayer = () =>{
          if (currentPlayer === 2 && !endGame) {
               paused = true
               const gamePosition = CpuPlay()
               
               if (game[gamePosition] === 0 ){
                   const timeToPlay = () =>{
                         const gameTemp = [ ...game]
                         gameTemp[gamePosition] = currentPlayer
                         setPlayer()
                         setGame([...gameTemp])
                         winner(gameTemp)
                         paused = false
                         return ''
                   }

                   setTimeout(timeToPlay,1000)



               }else{
                    CpuPlayer(game)
               }
          }    
     }

     const twoPlayerGame = () => {
          setTwoPlayer(true)
          reset()
          setWins([0,0])
          setCurrentPlayer(1)
          setInitialPlayer(1)
     }

     const onePlayerGame = () => {
          setTwoPlayer(false)
          reset()
          setWins([0,0])
          setCurrentPlayer(1)
          setInitialPlayer(1)
     }

     const play = (gamePosition, currentPlayer) => {
          if (game[gamePosition] === 0 && !endGame && !paused) {
               const gameTemp = [...game]
               gameTemp[gamePosition] = currentPlayer
               setPlayer()
               setGame([...gameTemp])
               winner(gameTemp)
          }
     }

     useEffect(() =>{
          if (twoPlayer){
               CpuPlayer()
          }
     })

     return (
          <main>
               <Menu reset={reset} endGame={endGame} twoPlayer={twoPlayerGame} onePlayer={onePlayerGame}/>
               <ScoreBoard  wins={wins} />
               <div className="game">
                    <div className="board">

                         <WinnerLine axis={positionLine} />
                         <InkBoard />
                         <div className="size">
                              <Button playerAvatar={game[0]} click={play} data={[0, currentPlayer]} />
                              <Button playerAvatar={game[1]} click={play} data={[1, currentPlayer]} />
                              <Button playerAvatar={game[2]} click={play} data={[2, currentPlayer]} />
                         </div>
                         <div className="size">
                              <Button playerAvatar={game[3]} click={play} data={[3, currentPlayer]} />
                              <Button playerAvatar={game[4]} click={play} data={[4, currentPlayer]} />
                              <Button playerAvatar={game[5]} click={play} data={[5, currentPlayer]} />
                         </div>
                         <div className="size">
                              <Button playerAvatar={game[6]} click={play} data={[6, currentPlayer]} />
                              <Button playerAvatar={game[7]} click={play} data={[7, currentPlayer]} />
                              <Button playerAvatar={game[8]} click={play} data={[8, currentPlayer]} />
                         </div>


                    </div>
               </div>
          </main>
     )
}