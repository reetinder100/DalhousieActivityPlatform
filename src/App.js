import React from "react";
import { Header } from "./Header&Footer/Header";
import { Dashboard } from "./Mainpage/Dashboard";
import { HeaderSpacer } from "./styling/HeaderStyle";
import ThingsToDo from "./ThingsToDo/ThingstoDo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeaderSpacer />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/things-to-do" element={<ThingsToDo />} />
        {/*<Route path="/popular-locations" element={<PopularLocations />} />
        <Route path="/contact" element={<Contact />} />*/}
      </Routes>
    </div>
  );
}

export default App;
