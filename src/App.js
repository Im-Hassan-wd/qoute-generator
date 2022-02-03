import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import QuoteList from "./QuoteList";

const App = () => {

  return (
    <BrowserRouter>
      <div className="app">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/quote/:id">
              <QuoteList />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
