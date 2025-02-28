import { useState } from 'react'

export default function Player ({ playerName, symbol }) {
    const [playerEdit, setPlayerEdit] = useState({name: '', edit: false})

    function playernameEdit () {
        setPlayerEdit((previosData) => {return { ...previosData, edit: true}})
    }

    function playernameSave () {
        setPlayerEdit((previosData) => {return { ...previosData, edit: false}})
    }

    function updateInputvalue (event) {
        setPlayerEdit((previosData) => {return { ...previosData, name: event.target.value}})
    }
    return (
        <div>
            
            {playerEdit.edit ?
                <input value={playerEdit.name} type="string" onChange={(e) => updateInputvalue(e)} placeholder="Enter player name" />
                : (playerEdit.name || playerName )
            }
            {playerEdit.edit ?
              <button onClick={() => playernameSave()}>Save</button>
              : <button onClick={() => playernameEdit()}>Edit</button>
            }
        </div>
    )
}