import React from "react";
import { Route } from "react-router-dom";
import { Petition, Main, Writing, Management, Post, Ongoing } from "pages";

const Router = () => {
  return (
    <>
      <Route exact path="/" component={Main} />
      <Route exact path="/petition/:status" component={Petition} />
      <Route path="/petition/:status/post/:id" component={Post} />
      <Route path="/ongoing" component={Ongoing} />
      <Route path="/write" component={Writing} />
      <Route path="/management" component={Management} />
    </>
  );
};

export default Router;
