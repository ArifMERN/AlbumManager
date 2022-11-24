import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { AlbumContextProvider } from "./context/AlbumContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AlbumContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AlbumContextProvider>
);
