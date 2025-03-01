// import logo from './logo.svg';
import './index.css';
import Player from './components/Player.jsx'
import PlayingBoard from './components/PlayingBoard.jsx'
import UserLogs from './components/UserLogs.jsx'
import { useState } from 'react';


function App() {

  const playerX = 'X' 
  const playerY = 'O'
  const [selectedSquare, setSelectedPlayer] = useState(playerX ) 
  const [playerTurns, updatePlayerTurns] = useState([])

  function changeTurn (row, columns) {
    setSelectedPlayer(olderValue => olderValue === playerX  ? playerY: playerX )
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
      <div>Our Class</div>
      <div>Selected Square {selectedSquare}</div>
      <section className="flex flex-col items-center">
        <div className="w-full flex justify-around">
          <Player playerName="Player 1" symbol="X"/>
          <Player playerName="Player 2" symbol="O"/>
        </div>
        <PlayingBoard eventByUser={changeTurn}  playerLog={playerTurns} />
        <UserLogs />
      </section>
    </div>
  )
}

export default App;
