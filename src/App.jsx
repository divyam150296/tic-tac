// import logo from './logo.svg';
import './index.css';
import Player from './components/Player.jsx'
import PlayingBoard from './components/PlayingBoard.jsx'
import UserLogs from './components/UserLogs.jsx'
import { useState } from 'react';


function App() {
  
  const [selectedSquare, setSelectedPlayer] = useState('X') 

  function changeTurn () {
    setSelectedPlayer(olderValue => olderValue === 'X' ? '0': 'X')
    console.log(selectedSquare, 'updating the data')
  }

  return (
    <div class="w-screen">
      <div>Selected Square {selectedSquare}</div>
      <section class="flex flex-col items-center">
        <div class="w-full flex justify-around">
          <Player playerName="Player 1" symbol="X"/>
          <Player playerName="Player 2" symbol="O"/>
        </div>
        <PlayingBoard eventByUser={changeTurn} />
        <UserLogs />
      </section>
    </div>
  )
}

export default App;
