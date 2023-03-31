import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// import "jquery/dist/jquery.js";
// import "jquery-resizable-columns/dist/jquery.resizableColumns.min.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// import "bootstrap-table/dist/bootstrap-table.min.css";
// import "bootstrap-table/dist/bootstrap-table.min.js";

// import "bootstrap-table/src/bootstrap-table.js";
// import "bootstrap-table/dist/extensions/resizable/bootstrap-table-resizable.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
