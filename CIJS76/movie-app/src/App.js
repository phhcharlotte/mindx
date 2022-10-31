import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Intro from "./components/intro/Intro";
import Contents from "./components/Contents/Contents";
import Menus from "./components/Menus/Menus";
function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Contents />
      <Menus />
    </div>
  );
}

export default App;
