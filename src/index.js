import React from "react";
import ReactDom from "react-dom";
import Navigation from "../src/components/navigation/navigation.js";

export default class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Navigation />
            </div>
        )
    }
}

const application = document.getElementById("root");
ReactDom.render(React.createElement(App), application);