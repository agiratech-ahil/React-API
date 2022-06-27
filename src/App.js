import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Products";
import Brewing from "./Brewing";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/home" element={<Products />} />

          <Route path="/Brewing/:userId" element={<Brewing />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
