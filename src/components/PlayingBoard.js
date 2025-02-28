const dummyPlayerDecision = [
    ['null', '3', '9'],
    ['null', 'null', 'null'],
    ['null', 'null', 'null']
]

export default function PlayingBoard () {
    return (
        <div>
        <div>Playing Board</div>
            {dummyPlayerDecision.map((boardElement, row) => {
                return(<div className="flex">{
                        boardElement.map((columnElement, index) => {
                            return(<div>{columnElement || index}</div>)
                        }
                    )
                }</div>)
            })
            }
        </div>
    )
}