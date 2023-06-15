import 'semantic-ui-css/semantic.min.css';
import { Button, Icon, Menu } from 'semantic-ui-react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Series from "./pages/Series";
import Error404 from "./pages/Error404";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={() => <Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="*" element={<Error404 />} />
        </Routes>  
      </BrowserRouter>
      
    </div>
  );
}

export default App;