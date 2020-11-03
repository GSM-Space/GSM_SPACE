import React from 'react';
import { Route } from 'react-router-dom';

const Router = () => {
    return(
        <>
        <Route exact path="/" component={() => <div>메인 페이지입니다.</div>}/>
        <Route path="/petition" component={() => <div>청원 폼입니다.</div>}/>
        <Route path="/:state/petition" component={() => <div>청원 상태입니다.</div>}/>
        </>
    );
}

export default Router;