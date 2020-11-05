import React from 'react';
import { Route } from 'react-router-dom';
import { Petition } from './pages';
import space from "./space"

const Router = () => {
    return (
        <>
            <Route exact path="/" component={space} />
            <Route path="/petition/:state" component={Petition} />
        </>
    );
}

export default Router;