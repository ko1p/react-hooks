import React from "react"
import {GitHubContext} from './GitHubContext'
import {gitHubReducer} from "./gitHubReducer";
import {CLEAR_USERS, GET_REPOS, GET_USER, SET_LOADING} from "../types";

export const gitHubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }
    const [state, dispatch] = useReducer(gitHubReducer, initialState)

    const search = async value => {
        setLoading()
        /// ...

        dispatch({type: SEARCH_USERS, payload: []})
    }

    const getUser = async name => {
        setLoading()
        // ...

        dispatch({type: GET_USER, payload: {}})
    }

    const getRepos = async name => {
        setLoading()
        // ...

        dispatch({type: GET_REPOS, payload: []})
    }

    const clearUsers = () => {
        dispatch({type: CLEAR_USERS})
    }

    const setLoading = () => {
        dispatch({type: SET_LOADING})
    }

    const {user, users, loading, repos} = state;

    return (
        <GitHubContext.Provider value={
            search, getUser, getRepos, clearUsers, setLoading,
        }>
            {children}
        </GitHubContext.Provider>
    )
}