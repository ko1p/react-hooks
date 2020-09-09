import React, {useReducer} from "react"
import {GitHubContext} from './GitHubContext'
import {gitHubReducer} from "./gitHubReducer";
import {CLEAR_USERS, GET_REPOS, GET_USER, SET_LOADING, SEARCH_USERS} from "../types";
import axios from 'axios'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

export const GitHubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }
    const [state, dispatch] = useReducer(gitHubReducer, initialState)

    const search = async value => {
        setLoading()

        const response = await axios.get(
            `https://api.github.com/search/users?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
        )

        dispatch({type: SEARCH_USERS, payload: response.data.items})
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
        <GitHubContext.Provider value={{
            search, getUser, getRepos, clearUsers, setLoading,
            user, users, loading, repos
        }}>
            {children}
        </GitHubContext.Provider>
    )
}