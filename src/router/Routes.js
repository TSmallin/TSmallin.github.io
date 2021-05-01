import React from "react";
import { Route, Switch } from "react-router-dom";

import About from "../container/About"
import Privacy from "../container/Privacy"
import Home from "../container/Home"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <Switch>
            <Route path="/about" exact component={About} />
            <Route path="/privacy" exact component={Privacy} />
            { /* 路径不存在，则回到主页。 */ }
            <Route component={Home} />
        </Switch>
    )
}