import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import r2wc from "@r2wc/react-to-web-component";
import { Counter } from "./components/Counter/Counter";
import { PodcastsList } from "./components/PodcastsList/PodcastsList";

const CounterComp = r2wc(Counter);
customElements.define("r2w-counter", CounterComp);
const PodcastsListComp = r2wc(PodcastsList);
customElements.define("r2w-podcasts-list", PodcastsListComp);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
