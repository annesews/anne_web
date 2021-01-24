import './App.css';
import Home from "./components/Home";
import AllPosts from "./components/AllPosts";
import Navigation from "./components/Navigation";
import React, { useState } from "react";

function App() {
  const [showHome, setShowHome] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showAllPosts, setShowAllPosts] = useState(false);
  const [showCat, setShowCat] = useState(false);
  return (
      <div>
        <header>
        </header>
        <div className="app-body">
          <Home/>
          <AllPosts sh={{sh: showAllPosts}}/>
        </div>
      </div>
  );
}

export default App;
