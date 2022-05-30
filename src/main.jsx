import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TaskProvider } from "./Providers/TaskContext";
import GlobalStyles from "./styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GlobalStyles />
        <TaskProvider>
            <App />
        </TaskProvider>
    </React.StrictMode>
);
