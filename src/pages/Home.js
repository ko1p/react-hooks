import React, {Fragment, useContext} from "react";
import {Search} from "../components/Search";
import {Card} from "../components/Card";
import {Alert} from "../components/Alert";
import {GitHubContext} from "../context/github/GitHubContext";

export const Home = () => {

    const {loading, users} = useContext(GitHubContext)

    return (
        <Fragment>
            <Alert alert={{text: 'test alert'}} />
            <Search />
            <div className="row">

                {loading
                    ? <p className="text-center">Загрузка...</p>
                    : users.map(user => (
                        <div className="col-sm-4 mb-4" key={user.id}>
                            <Card user={user}/>
                        </div>
                        )
                    )}
            </div>
        </Fragment>
    )
}