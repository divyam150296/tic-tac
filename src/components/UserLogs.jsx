export default function UserLogs ({ playerTurns }) {

    console.log(playerTurns, 'player turns')

    return (
        <div>User Logging into
            {/* { playerTurns.length && playerTurns.map((ele) => {
                return (<div>{ele.player}:{ele.box.row} | {ele.box.columns}</div>))
            }
        } */}
        { playerTurns?.length && playerTurns.map((ele) => {
            return (<div key={Math.random()}>{ele.player}:{ele.box.row} | {ele.box.columns}</div>)
        })}
        </div>
    )
}