import "./App.scss";
import NavBar from "./Navbar";
import SideBar from "./Sidebar";
import Content from "./Content";
import BottomNav from "./Bottom-nav/BottomNav";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <SideBar />
        <Content />
      </div>
      <BottomNav />
    </div>
  );
}

export default App;
