import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";

const App = () => {

  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
 
export default App;
