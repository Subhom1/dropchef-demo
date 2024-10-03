import "./App.css";
import Menu from "./screens/menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderDetails from "./screens/OrderDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/order-details" element={<OrderDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
