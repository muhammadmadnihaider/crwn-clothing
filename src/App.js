import HomePage from "./pages/home/homepage.component";
import { Switch, Route } from "react-router-dom";

import "./App.css";

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
