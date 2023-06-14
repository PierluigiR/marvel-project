import 'semantic-ui-css/semantic.min.css';
import { Button, Icon, Menu } from 'semantic-ui-react';
import './App.css';
import Home from "./pages/Home"
import Comics from "./pages/Comics"
import Series from "./pages/Series"
import Error404 from "./pages/Error404"

function App() {
  return (
    <div>
      <div className="header-menu">
        <Menu secondary>
            <Menu.Item name="inicio" onClick={()=>console.log("haciendo clic en el menu")} />
            <Menu.Item name="series" onClick={()=>console.log("haciendo clic en series")} />
            <Menu.Item name="comics" onClick={()=>console.log("haciendo clic en comics")} />
        </Menu>
    </div>
    </div>
  );
}

export default App;


