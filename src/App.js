import 'semantic-ui-css/semantic.min.css';
import { Button, Icon, Menu } from 'semantic-ui-react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Series from "./pages/Series";
import Error404 from "./pages/Error404";
import Header from "./components/Header";

function App() {
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