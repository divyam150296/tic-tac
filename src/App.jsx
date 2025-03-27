// import logo from './logo.svg';
import './index.css';
import Player from './components/Player.jsx'
import PlayingBoard from './components/PlayingBoard.jsx'
import TimerSet from './components/TimerSet.jsx'
import UserLogs from './components/UserLogs.jsx'
import { useState } from 'react';


function App() {

  const playerX = 'X' 
  const playerY = 'O'
  // const [selectedSquare, setSelectedPlayer] = useState(playerX ) 
  const [playerTurns, updatePlayerTurns] = useState([])
  let activePlayer = playerX

  if (playerTurns.length && playerTurns[0].player === playerX) {
    activePlayer = playerY
  }

  function changeTurn (row, columns) {
    updatePlayerTurns(previousState => {

      let defaultUser = playerX

      if (playerTurns.length) {
        if (playerTurns[0].player === playerX) {
          defaultUser = playerY
        } else {
          defaultUser =playerX
        }
      }
      const updatedTurns = [
        {box: { row, columns}, player: defaultUser},
        ...previousState
      ]
      return updatedTurns

    })
  }

  return (
    <div className="w-screen">
      <section className="flex flex-col items-center">
        <div className="w-full flex justify-around">
          <Player playerName="Player 1" symbol="X" activePlayer={activePlayer}/>
          <Player playerName="Player 2" symbol="O" activePlayer={activePlayer}/>
        </div>
        <PlayingBoard eventByUser={changeTurn}  playerLog={playerTurns} />
        <UserLogs playerTurns={playerTurns}/>
        <TimerSet />
      </section>
    </div>
  )
}
 
export default App;
