import React, {useContext, useState} from "react"
import {AlertContext} from "../context/alert/alertContext"
import {GitHubContext} from "../context/github/GitHubContext";

export const Search = () => {

    const {show} = useContext(AlertContext)
    const github = useContext(GitHubContext)

    const [value, setValue] = useState('')

    const onSubmit = event => {
        if (event.key !== 'Enter') {
            return
        }

        if (value.trim()) {
            github.search(value.trim())
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