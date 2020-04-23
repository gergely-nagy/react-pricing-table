import React from "react";
import ReactDOM from "react-dom";

import Example from "./Example";
import ExampleCustomAccessors from "./Example-CustomAccessors";
import { AppContainer } from "react-hot-loader";
// AppContainer is a necessary wrapper component for HMR

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById("root")
    );
};

const Examples = () => (
    <div>
        <h1>Basic Example</h1>
        <Example />
        <h2>With Custom Accessors</h2>
        <ExampleCustomAccessors />
    </div>
);

render(Examples);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept(["./Example", "./Example-CustomAccessors"], () => {
        render(Examples);
    });
}