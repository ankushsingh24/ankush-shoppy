import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import { registerLicense } from "@syncfusion/ej2-base";

// Registering Syncfusion license key
registerLicense(
  "ORg4AjUWIQA/Gnt2VVhiQlFadVlJVXxId0x0RWFbb196dFJMYVRBJAtUQF1hS35UdEViWnxbc3VQR2lV"
);

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
