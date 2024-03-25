import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
// import "./App.css";
import Footer from "./component/Footer";
import RegisterNewCustomer from "./pages /RegisterNewCustomer";
import NewPlans from "./pages /NewPlans";
import About from "./pages /About";
import CustomersTable from "./pages /CustomersTable";
import Login from "./pages /Login";
import User from "./pages /User";
function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<RegisterNewCustomer />} />
          <Route path="/plan/:id" element={<NewPlans />} />
          <Route path="/about" element={<About />} />
          <Route path="/customers" element={<CustomersTable />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>

        {/* <RegisterNewCustomer></RegisterNewCustomer> */}

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
