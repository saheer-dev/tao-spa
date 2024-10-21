import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { AppProvider } from "./components/context/Context";
import Profile from "./components/profile/Profile";
import DoctorNote from "./components/profile/ProfileTabs/treatmenttabs/DoctorNote";


function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<DoctorNote />} />
      
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;
