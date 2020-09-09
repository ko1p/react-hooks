import React, {useContext, useState} from "react"
import {AlertContext} from "../context/alert/alertContext"

export const Search = () => {

    const {show} = useContext(AlertContext)

    const [value, setValue] = useState('')

    const onSubmit = event => {
        if (event.key !== 'Enter') {
            return
        }

        if (value.trim()) {
            console.log('make request by value', value)
        } else {
            show('Вы не указали данные пользователя!')
        }
    }

    return (
        <div className="form-group">
            <input
                className="form-control"
                type="text"
                placeholder="Введите ник пользователя..."
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyPress={onSubmit}
            />
        </div>
    )
}