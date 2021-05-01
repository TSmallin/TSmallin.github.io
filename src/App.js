import "./App.css";
import Routes from "./router/Routes";
import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
           <div className="App-header">
              <Link to={'/about'}>About</Link>
              <Link to={'/privacy'}>Privacy</Link>
            </div>
        </header>
        <div className="App-mid">
          <Routes />
        </div>
        <footer>
            <div className="App-footer">
              <a href={'mailto:tanglin.me@foxmail.com?subject=PasswordBox-Feedback'}>联系我们</a>
              <p/>
              <span>Copyright © 2021 PasswordBoxApp. All rights reserved.</span>
            </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
