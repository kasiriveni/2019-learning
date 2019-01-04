import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

export class AppState {
    @observable timer = 0;

    constructor() {
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }

    @action.bound
    reset() {
        this.timer = 0;
    }
}

export const TimerView = observer(({ appState }) => (
    <button onClick={appState.reset}>Seconds passed: {appState.timer}</button>
));
