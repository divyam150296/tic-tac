import logo from './logo.svg';
import './App.css';
import Player from './components/Player.js'
import PlayingBoard from './components/PlayingBoard.js'
import UserLogs from './components/UserLogs.js'


function App() {
  return (
    <div className="App">
      <Player />
      <PlayingBoard />
      <UserLogs />
    </div>
  );
}

export default App;
