import React from 'react';
import { Route } from 'react-router-dom';
import { Petition, Main,Writing, Management } from 'pages';

const Router = () => {
    return(
        <>
            <Route exact path="/" component={Main} />
            <Route path="/petition/:state" component={Petition} />
            <Route path="/petition/write" component={Writing} />
            <Route path="/ongoing/management" component={Management} />
        </>
    );
}

export default Router;