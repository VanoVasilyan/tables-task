import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import routes from "./data";

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
