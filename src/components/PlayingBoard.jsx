import { useState } from "react"

const dummyData = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function PlayingBoard ({ eventByUser, playerLog }) {
    let dummyPlayerDecision = [...dummyData]
    if (playerLog.length > 0) {
        for (const keyElement of  playerLog) {
            console.log(keyElement)
            // if ((keyElement.box.row === 0) && (keyElement.box.columns === 0)) {
            //     console.log(keyElement.box.row, keyElement.box.columns, keyElement.player, 'console in the area')
            // }
            dummyPlayerDecision[keyElement.box.row][keyElement.box.columns] = keyElement.player
        }
    }

    return (
        <div>
        <div>Playing Board</div>
        {dummyPlayerDecision} here
            {dummyPlayerDecision.map((boardElement, boardRow) => {
                return(<div className="flex" key={`${Math.random()}`}>{
                        boardElement.map((columnElement, boardColumn) => {
                            return(
                            <button onClick={() => eventByUser(boardRow, boardColumn)} key={`${boardElement}+7${boardRow}`} className="flex w-20 h-20 p-5 bg-[#ceb9b9] justify-center items-center mb-[5px] mr-[5px]" disabled={columnElement}>
                                {columnElement || ''}
                            </button>)
                        }
                    )
                }</div>)
            })
            }
        </div>
    )
}