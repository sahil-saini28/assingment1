import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import RegisterNewCustomer from "./pages /RegisterNewCustomer";
import NewPlans from "./pages /NewPlans";
import About from "./pages /About";
function App() {
  return (
    <>
      <div>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<RegisterNewCustomer />} />
          <Route path="/plan" element={<NewPlans />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
        {/* <RegisterNewCustomer></RegisterNewCustomer> */}

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
