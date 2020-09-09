import React from "react"
import {GitHubContext} from './GitHubContext'
import {gitHubReducer} from "./gitHubReducer";

export const gitHubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }
    const [state, dispatch] = useReducer(gitHubReducer, initialState)

    return (
        <GitHubContext.Provider value={}>
            {children}
        </GitHubContext.Provider>
    )
}