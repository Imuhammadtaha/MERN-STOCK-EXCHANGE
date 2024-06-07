import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Overview from "./pages/Overview";
import Trending from "./pages/Trending";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Portfolio from "./pages/Portfolio";
import AddCoin from "./pages/AddCoin";
import Recommended from "./pages/Recommended";
import EditChoice from "./pages/EditChoice";
import AddNote from "./pages/AddNote";
import Exchange from "./pages/Exchange";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/add-coin" element={<AddCoin />} />
          <Route path="/recommended" element={<Recommended />} />
          <Route path="/edit-choice" element={<EditChoice />} />
          <Route path="/add-note" element={<AddNote />} />
          <Route path="/exchange" element={<Exchange />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
