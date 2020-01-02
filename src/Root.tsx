import React from "react";
import ReactDom from "react-dom";
import Page from "./Page";

// theme
const theme = localStorage.getItem("theme");
const HTML_NODE = document.getElementsByTagName("html")[0];
if (theme !== null) {
  HTML_NODE.setAttribute("theme", theme);
} else {
  HTML_NODE.setAttribute("theme", "white");
}

let App = Page;
const app: Element | null = document.getElementById("root");
function render() {
  ReactDom.render(<App />, app);
}
render();

// 热更新
if ((module as any).hot) {
  (module as any).hot.accept("./Page", () => {
    const nextApp = require("./Page").default;
    App = nextApp;
    render();
  });
}
