import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotMatch from './components/NotMatch/NotMatch';
function App() {
  return (
    <>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="*">
            <NotMatch></NotMatch>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
