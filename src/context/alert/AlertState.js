import React from "react"
import {AlertContext} from "./alertContext";

export const AlertState = (props) => {

    return (
        <AlertContext.Provider>
            {props.children}
        </AlertContext.Provider>
    )
}