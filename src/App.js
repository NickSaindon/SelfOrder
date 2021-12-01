import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import DinningChoices from "./components/DinningChoices";
import Order from './components/Order';
import Review from './components/Review';
import SelectPayment from './components/SelectPayment';
import Payment from './components/Payment';
import Complete from './components/Complete';
import Queue from './components/Queue';
import Admin from './components/Admin';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dinning-choices" element={<DinningChoices />} />
        <Route path="/order" element={<Order />} />
        <Route path="/review" element={<Review />} />
        <Route path="/select-payment" element={<SelectPayment />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/complete-order" element={<Complete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
