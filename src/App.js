import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Home";
import Aboutpage from "./Pages/About";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
      <Navbar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
