import React from "react";
import "./App.css"; // Import styles specific to the App component here
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="bg-gradient-to-t from-black via-slate-900 to-cyan-900">
      <NavBar />
      <Hero />
    </div>
  );
};

export default App;
