import React from 'react';
import { Route } from 'react-router-dom';
import { Petition, Main } from 'pages';

const Router = () => {
    return(
        <>
            <Route exact path="/" component={Main} />
            <Route path="/petition/:state" component={Petition} />
            <Route path="/petition/write" component={() => <div>청원 글쓰기</div>} />
        </>
    );
}

export default Router;