// import LoginScreen from "./pages/LoginScreen";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
function App() {
  // const user = null;
  return (
    <div>
      <Router>
        {/* {!user ? (
          <LoginScreen />
        ) : ( */}
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Routes>
        {/* )} */}
      </Router>
    </div>
  );
}

export default App;
