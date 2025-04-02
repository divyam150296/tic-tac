import { useState } from "react"

export default function PlayerDetails () {

//   const refValue = useRef('')

  const [ playerName, setPlayerName ] = useState('Unknown')
  const [inputShowStatus, updateShowStatus] = useState(false)

  const updatePlayerName = (event) => {
    setPlayerName(event.target.value)
  }

  const showInputSection = () => {
    updateShowStatus(previous => !previous)
  }

  return (
    <div>
        <span>Hey give me your details {playerName}</span>
        <span>What to change the name ? Click Below </span>
        <button onClick={showInputSection}>
            Let's Update your name
        </button>
        {inputShowStatus && <div>
          <input type="string" value={playerName} onChange={(e) => updatePlayerName(e)} />
          <button className="">Save</button>
        </div>}
    </div>
  )
}