import { useRef, useState } from "react"
import PointsDialog from './PointsDialog'


export default function TimerCard({ cardData }) {
    let timer = useRef()
    let dialog = useRef()

    console.log(cardData, 'card data length')

    const [timerStatus, updateTimerStatus] = useState(false)
    const [playerLost, setPlayerLostStatus] = useState(false)
    

    const startTimer = () => {
        timer.current = setTimeout(() => {
            setPlayerLostStatus(true)
            console.log(cardData.time, 'timer data')
            dialog.current.showModal()
        }, cardData.time * 1000)
        updateTimerStatus(true)
    }
 
    const stopTimer = () => {
        console.log('closing timer', timer.current)
        clearTimeout(timer.current)
        updateTimerStatus(false)
    }

    return (
        <>
            <PointsDialog ref={dialog} result="Lost" time={cardData.time}/>
            <div className='border-2 border-white rounded-xl' key={cardData.title}>
                <div>{cardData.title}</div>
                timer : {timer.current}
                {cardData.time && <div>{cardData.time} {cardData.time > 1 ? 'seconds' : 'second'}</div>}
                <div>Level : {cardData.level}-- {timerStatus ? 'he;lo': 'gone'}</div>
                <button onClick={ timerStatus ? stopTimer : startTimer }>{timerStatus ? '| Click on me to stop |' : '| Click on me to start |'}</button>
                {playerLost && 'You lost the game'}
            </div>
        </>
    )
}