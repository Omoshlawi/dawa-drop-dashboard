import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { MainTheme } from "./theme/MainTheme";
import Navigator from "./navigation/Navigator";

function App() {
  return (
    <Router>
      <MainTheme>
        <Navigator />
      </MainTheme>
    </Router>
  );
}

export default App;
