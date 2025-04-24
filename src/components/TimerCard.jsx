import { useRef, useState } from "react"
import PointsDialog from './PointsDialog'


export default function TimerCard({ cardData }) {
    let timer = useRef()
    let dialog = useRef()
    
    const [timeRemaining, setRemainingTime] = useState(cardData.time * 1000)

    const timerIsActive = timeRemaining > 0 && timeRemaining < (cardData.time * 1000)

    const lostStatus = timeRemaining < 0
    console.log(lostStatus)

    if (timeRemaining <= 0) {
        dialog.current.showModal()
        clearInterval(timer.current) 
    }

    const startTimer = () => {
        console.log('timer starting')
        timer.current = setInterval(() => {
            setRemainingTime(previousTime => previousTime - 10)
        }, 10)
    }
 
    const stopTimer = () => {
        clearInterval(timer.current)
        setRemainingTime(cardData.time * 1000)
    }

    return (
        <>
            <PointsDialog ref={dialog} result="Lost" time={cardData.time}/>
            <div className='border-2 border-white rounded-xl' key={cardData.title}>
                <div>{cardData.title}</div>
                timer : {timer.current}
                {cardData.time && <div>{cardData.time} {cardData.time > 1 ? 'seconds' : 'second'}</div>} { timerIsActive }
                <div>Level : {cardData.level}-- {timerIsActive ? 'he;lo': 'gone'}</div>
                <button onClick={ timerIsActive ? stopTimer : startTimer }>{timerIsActive ? '| Click on me to stop |' : '| Click on me to start |'}</button>
                {lostStatus && 'You lost the game'}
            </div>
        </>
    )
}