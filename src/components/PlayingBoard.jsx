import { useState } from "react"

const dummyData = [
    ['null', '3', '9'],
    ['null', 'null', 'null'],
    ['null', 'null', 'null']
]

export default function PlayingBoard ({ eventByUser, playerLog }) {
    let dummyPlayerDecision = [...dummyData]
    if (playerLog.length > 0) {
        for (const keyElement of  playerLog) {
            dummyPlayerDecision[keyElement.box.row][keyElement.box.columns] = keyElement.player
        }
    }

    return (
        <div>
        <div>Playing Board</div>
            {dummyPlayerDecision.map((boardElement, boardRow) => {
                return(<div className="flex" key={`${Math.random()}`}>{
                        boardElement.map((columnElement, boardColumn) => {
                            return(
                            <button onClick={() => eventByUser(boardRow, boardColumn)} key={`${boardElement}+7${boardRow}`} className="flex w-20 h-20 p-5 bg-[#ceb9b9] justify-center items-center mb-[5px] mr-[5px]">
                                {columnElement || boardColumn}
                            </button>)
                        }
                    )
                }</div>)
            })
            }
        </div>
    )
}