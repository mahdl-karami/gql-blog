import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
// ! Import GraphQL Provider
import GraphQL from "./graphql/GraphQL.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GraphQL>
      <App />
    </GraphQL>
  </React.StrictMode>
);
