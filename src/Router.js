import React from 'react';
import { Route } from 'react-router-dom';
import { Petition, Main,Writing, Management, Post } from 'pages';

const Router = () => {
    return(
        <>
            <Route exact path="/" component={Main} />
            <Route exact path="/petition/:status" component={Petition} />
            <Route path="/petition/write" component={Writing} />
            <Route path="/ongoing/management" component={Management} />
            <Route path="/petition/:status/post/:id" component={Post} />
        </>
    );
}

export default Router;
