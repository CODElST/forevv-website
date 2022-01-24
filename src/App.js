import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Home";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Navbar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
