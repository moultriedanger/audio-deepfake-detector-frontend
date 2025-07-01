import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Product from "./Product";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element = {<Product/>}/>

      </Routes>

    </Router>

  );
}

export default App;
