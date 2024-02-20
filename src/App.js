import CartPg from "./components/MainDesk/Cart__pg";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Order from "./components/Order/new__Order";
import Header from "./components/Header/Navbar";
import ConfPg1 from "./components/Conf__pg1/configPage1";
import ConfPg2 from "./components/Conf__pg2/configPage2";
import FinalOrder from "./components/Final___Order/FinalOrder";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<CartPg />} />
        <Route exact path="/new-order" element={<Order />} />
        <Route exact path="/configuration-1" element={<ConfPg1 />} />
        <Route exact path="/configuration-2" element={<ConfPg2 />} />
        <Route exact path="/place-order" element={<FinalOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
