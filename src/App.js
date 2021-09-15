import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotMatch from './components/NotMatch/NotMatch';
import Country from './components/Country/Country';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Country></Country>
          </Route>
          <Route path="/country/:country">
            <CountryDetails></CountryDetails>
          </Route>
          <Route path="*">
            <NotMatch></NotMatch>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div >
  );
}

export default App;
