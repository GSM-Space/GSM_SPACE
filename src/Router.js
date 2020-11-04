import React from 'react';
import { Route } from 'react-router-dom';
import space from "./space"

const Router = () => {
    return (
        <>
            <Route exact path="/" component={space} />
            <Route path="/petition" component={() => <div>청원 폼입니다.</div>} />
            <Route path="/:state/petition" component={() => <div>청원 상태입니다.</div>} />
        </>
    );
}

export default Router;