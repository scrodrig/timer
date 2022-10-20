import { useState, useEffect } from 'react'
function CountDown() {
    let [targetSeconds, setTargetSeconds] = useState(null)
    let [elapsedSeconds, setElapsedSeconds] = useState(null)

    useEffect(function () {
        if (targetSeconds === null) return
        setElapsedSeconds(0)
        let interval = setInterval(() => {
            setElapsedSeconds((elapsedSeconds) => elapsedSeconds + 1)
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    }, [targetSeconds])

    function parseForm(ev) {
        ev.preventDefault()
        let seconds = ev.target.seconds.value
        setTargetSeconds(parseInt(seconds))
    }

    if (elapsedSeconds >= targetSeconds && targetSeconds !== null) {
        return (<>
            <p>It is over!!!</p>
            <button onClick={() => { setTargetSeconds(null) }}> Restart</button>
        </>)
    }

    if (targetSeconds !== null) {
        return (<p>I'm counting until {targetSeconds} and {elapsedSeconds} have passed</p>)
    }


    return (
        <>
            <p>How many seconds you want to count</p>
            <form action="#" onSubmit={ev => (parseForm(ev))}>
                <input type="number" name="seconds" />
                <button> Start</button>
            </form>
        </>
    )
}

export default CountDown