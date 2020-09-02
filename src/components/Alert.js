import React, {useContext} from "react"
import {AlertContext} from "../context/alert/alertContext";

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext)
    console.log(useContext(AlertContext))

    if (!alert) {
        return null
    } else {
        return (
            <div
                className={`alert alert-${alert.type || 'secondary'} alert-dismissible`}
                role="alert"
            >
                { alert.text }
                <button onClick={hide} type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }


}