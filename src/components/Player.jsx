import { useState } from 'react'

export default function Player ({ playerName, symbol, activePlayer }) {
    const [playerEdit, setPlayerEdit] = useState({name: playerName, edit: false})

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
        <div className='flex items-center'>
            {playerEdit.edit ?
                <input value={playerEdit.name} type="string" onChange={(e) => updateInputvalue(e)} placeholder={playerEdit.name || 'Enter player name'} />
                : (<div className={`mr-4 p-[9px] border-2 rounded-xl ${activePlayer === symbol ? 'border-[#008000]' : ''}`}>{playerEdit.name || playerName }</div>)
            }
            {playerEdit.edit ?
              <button className='p-[4px] text-xs' onClick={() => playernameSave()}>Save</button>
              : <button className='p-[4px] text-xs' onClick={() => playernameEdit()}>Edit</button>
            }
        </div>
    )
}