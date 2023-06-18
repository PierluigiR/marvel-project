import './App.css';
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Series from "./pages/Series";
import Error404 from "./pages/Error404";
import Header from "./components/Header";
import useFetch from "./Hooks/useFetch";


function App() {
  const marvelApi= useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=952b42a104ba53bca224cbe292cb0948&hash=13045efc8851c7dcf8beca0aeb852c33')
  return (
    <div>
      <Router>
        <Header />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/inicio" exact component={() => <Home />} />
            <Route path="/series" exact component={() => <Series />} />
            <Route path="/comics" exact component={() => <Comics />} />
            <Route component={() => <Error404 />} />
          </Switch>
      </Router>      
    </div>
  );
}

export default App;