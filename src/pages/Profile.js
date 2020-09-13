import React, {useContext, useEffect} from "react";
import {GitHubContext} from "../context/github/GitHubContext";
import {Link} from "react-router-dom";

export const Profile = ({match}) => {

    const { getUser, getRepos, loading, user, repos } = useContext(GitHubContext)
    const urlName = match.params.name

    useEffect(() => {
        console.log('useEffect is running')
        getUser(urlName)
        getRepos(urlName)
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <p className="text-center">Загружаю...</p>
    }

    const {
        name, company, avatar_url, location, bio,
        blog, login, html_url, followers, following, public_repos, public_gists
    } = user

    return (
        <>
            <Link to="/" className="btn btn-link">На главную</Link>
            <div className="card mb-4 ">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img src={avatar_url} alt={name} style={{width: 150}}/>
                            <h1>{name}</h1>
                            {location ? <p>Местоположение: {location}</p> : null}
                        </div>
                        <div className="col">
                            {bio ? <><h3>BIO: <p>{bio}</p></h3></> : null}
                            <a href={html_url} className="btn btn-dark" target="_blank" rel="noopener noreferrer">Открыть профиль</a>
                            <ul>
                                {
                                    login ?
                                        <li>
                                            <strong>UserName: </strong>{login}
                                        </li> :
                                        null
                                }
                                {
                                    company ?
                                        <li>
                                            <strong>Компания: </strong>{login}
                                        </li> :
                                        null
                                }
                                {
                                    blog ?
                                        <li>
                                            <strong>web-site: </strong>{login}
                                        </li> :
                                        null
                                }
                            </ul>

                            <div className="badge badge-primary">Подписчики: {followers}</div>
                            <div className="badge badge-success">Подписан: {following}</div>
                            <div className="badge badge-info">Репозитории: {public_repos}</div>
                            <div className="badge badge-dark">Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>
            {repos.join()}
        </>
    )
}