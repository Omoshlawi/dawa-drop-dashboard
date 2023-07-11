import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigator from "./navigation/Navigator";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigator />
      </Router>
    </div>
  );
}

export default App;
