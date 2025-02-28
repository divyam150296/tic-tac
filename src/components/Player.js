import { useState } from 'react'

export default function Player () {
    const [player1Edit, setPlayer1Edit] = useState({name: '', edit: false})
    const [player2Edit, setPlayer2Edit] = useState({name: '', edit: false})

    function playernameEdit (player) {
        if (player === 'player1') {
            setPlayer1Edit((previosData) => {return { ...previosData, edit: true}})
        } else {
            setPlayer2Edit((previosData) => {return { ...previosData, edit: true}})
        }
    }

    function playernameSave (player) {
        if (player === 'player1') {
            setPlayer1Edit((previosData) => {return { ...previosData, edit: false}})
        } else {
            setPlayer2Edit((previosData) => {return { ...previosData, edit: false}})
        }
    }

    function updateInputvalue (event, playerType) {
        if (playerType === 'player1') {
            setPlayer1Edit((previosData) => {return { ...previosData, name: event.target.value}})
        } else {
            setPlayer2Edit((previosData) => {return { ...previosData, name: event.target.value}})
        }
    }
    return (
        <div>
            <div>
                <label>Player 1</label>
                {player1Edit.edit 
                 ? <input value={player1Edit.name} type="string" onChange={(e) => updateInputvalue(e, 'player1')} placeholder="Player 1"/> 
                 : <span>{player1Edit.name}</span>}
                <button onClick={() => playernameEdit('player1')}>Edit</button>
                <button onClick={() => playernameSave('player1')}>Save</button>
            </div>
            <div>
                <label>Player 2</label>
                {player2Edit.edit 
                  ? <input value={player2Edit.name} type="string" onChange={(e) => updateInputvalue(e, 'player2')} placeholder="Player 2"/> 
                  : <span>{player2Edit.name}</span>}
                <button onClick={() => playernameEdit('player2')}>Edit</button>
                <button onClick={() => playernameSave('player2')}>Save</button>
            </div>
        </div>
    )
}