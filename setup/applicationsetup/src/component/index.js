import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello"
import fetch from 'isomorphic-fetch';

console.log(fetch)

const root = document.getElementById("root");

ReactDOM.render(<Hello />, root);
