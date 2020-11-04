import React from 'react';
import { Route } from 'react-router-dom';
import { Petition } from './pages';

const Router = () => {
    return(
        <>
        <Route exact path="/" component={() => <div>메인 페이지입니다.</div>}/>
        <Route path="/petition/:state" component={Petition}/>
        </>
    );
}

export default Router;