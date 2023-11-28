import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import {TaskContextProvider} from "./TaskContext"

const root =  ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <App />
        {/* <TaskContextProvider> */}
        {/* </TaskContextProvider>  */}
    </React.StrictMode>
    ); 