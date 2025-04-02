export default function PointsDialog ({ result, time, ref }) {
    return (
        <dialog ref={ref}>
            <span>You {result}</span>
            <p>You stopped timer with <strong>{time}</strong> remaining</p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}