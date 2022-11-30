import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import App from "./App";
import "./styles/global.css";
import { apiGraphql } from "./services/graphql.api";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={apiGraphql}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
