import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <div className="app">
        <div className="content">
          <Home />
        </div>
      </div>
    </BrowserRouter>
  );
}
 
export default App;
