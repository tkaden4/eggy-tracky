import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

const el = document.getElementById("react-root");
if (!el) {
    //document.firstChild.textContent = "ELEMENT NOT DEFINED";
    throw new Error("root element not defined");
}

// TODO get username and current data

fetch("/users")
    .then(users => users.json())
    .then(users => {
        let client = users[0] || { name: "null", count: 0 };
        let other = users[1] || { name: "null", count: 0 };
        ReactDOM.render(
            <App client={client} other={other} />,
            el
        );
    });
