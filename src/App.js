import "./App.css";
import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/Footer";
import Data from "./components/data/Data";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Employees from "./components/employees/Employees";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<Data />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
         
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
