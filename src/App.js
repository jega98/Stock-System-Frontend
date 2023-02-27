import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./routes/registration";
import Login from "./routes/login";
import View_stock from "./routes/view-stock";
import Add_stock from "./routes/add-stock";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./routes/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />}/>
          <Route exact path="/register" element={<Registration />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/view-stock" element={<View_stock />}/>
          <Route exact path="/add-stock" element={<Add_stock />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
