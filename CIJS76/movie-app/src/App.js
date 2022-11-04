import Navbar from "./components/Navbar/Navbar";
import "./App.css";

import Home from "./components/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./components/pages/Search";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
