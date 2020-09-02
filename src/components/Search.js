import React, {useContext} from "react"
import {AlertContext} from "../context/alert/alertContext"

export const Search = () => {

    const {show} = useContext(AlertContext)

    const onSubmit = event => {
        if (event.key === 'Enter') {
            show('This is our alert!')
        }
    }

    return (
        <div className="form-group">
            <input
                className="form-control"
                type="text"
                placeholder="Введите ник пользователя..."
                onKeyPress={onSubmit}
            />
        </div>
    )
}