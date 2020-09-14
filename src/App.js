import React, {useState} from "react"
import {Transition} from "react-transition-group"

export default function App () {

    const [toggle, setToggle] = useState(true)


    return (
        <div className="container">
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            <hr/>
            <div className="blocks">
                <Transition
                    in={toggle}
                    timeout={{
                        enter: 1000,
                        exit: 500
                    }}
                    mountOnEnter
                    unmountOnExit
                >
                    {state => <div className={`square blue ${state}`}>{state}</div>}
                </Transition>
            </div>
        </div>
    )
}
