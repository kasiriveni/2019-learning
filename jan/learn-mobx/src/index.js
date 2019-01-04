import React, { Fragment } from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import { TimerView, AppState } from "./component/TimerView";
import Welcome from "./component/Welcome";

const root = document.getElementById("root");

render(
    <Fragment>
        <Welcome text={"Awesome Mobx"} />
        <TimerView appState={new AppState()} />
        <DevTools />
    </Fragment>,
    root
);
