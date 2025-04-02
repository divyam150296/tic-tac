import {DummyTimerCard} from  './dummyTimerCard.jsx'
import TimerCard from './TimerCard.jsx'

export default function TimerBoard () {

    let sortedData = []
   
    if (DummyTimerCard.length) {
        sortedData = DummyTimerCard.sort((a, b) => b.time-a.time)
    }

    return (
        <div className='grid grid-cols-2 gap-4 text-center'>
        {sortedData.length && sortedData.map((ele) => {
            return (
                <TimerCard key={ele.title} cardData={ele}/>
            )
            })
        }
        </div>
    )
}