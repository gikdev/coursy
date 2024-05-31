import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.jsx"
import "./main.css"

const container = document.querySelector("#root")
const root = ReactDOM.createRoot(container)
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/coursy">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
