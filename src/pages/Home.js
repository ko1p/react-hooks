import React, {Fragment} from "react";
import {Search} from "../components/Search";
import {Card} from "../components/Card";

export const Home = () => {

    const array = new Array(15).fill('').map((item, index) => index)

    return (
        <Fragment>
            <Search />

            <div className="row">
                {
                    array.map(item => (
                    <div className="col-sm-4 mb-4" key={item}>
                        <Card />
                    </div>
                ))
                }
            </div>
        </Fragment>
    )
}