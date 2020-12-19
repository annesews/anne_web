import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home"
import Navigation from "./components/Navigation";
import AllPosts from "./components/AllPosts"

function App() {
  return (
    <Router>
      <div>
        <header>
          <Navigation />
        </header>
        <div className="app-body">
          <Route exact path="/" component={Home}/>
          <Route exact path="/all-posts" component={AllPosts}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
