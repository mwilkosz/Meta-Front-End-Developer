import Home from "./components/Home"
import ConfirmedBooking from "./components/ConfirmedBooking";

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;