import React from 'react';
import { Route } from 'react-router-dom';
import { Petition, Main } from './pages';

const Router = () => {
    return (
        <>
            <Route exact path="/" component={Main} />
            <Route path="/petition/:state" component={Petition} />
        </>
    );
}

export default Router;