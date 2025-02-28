const dummyPlayerDecision = [
    ['null', '3', '9'],
    ['null', 'null', 'null'],
    ['null', 'null', 'null']
]

export default function PlayingBoard ({ eventByUser }) {

    function playerClicked () {
        eventByUser()
        console.log('hello')
    }

    return (
        <div>
        <div>Playing Board</div>
            {dummyPlayerDecision.map((boardElement, row) => {
                return(<div class="flex">{
                        boardElement.map((columnElement, index) => {
                            return(<button onClick={playerClicked} class="flex w-20 h-20 p-5 bg-[#ceb9b9] justify-center items-center mb-[5px] mr-[5px]">{columnElement || index}</button>)
                        }
                    )
                }</div>)
            })
            }
        </div>
    )
}