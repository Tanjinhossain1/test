import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateUserDataForm from "./Components/CreateUserDataForm";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="gradient_color_body">
      <Navbar />
      <Routes>
        <Route path="/" element={<CreateUserDataForm />}></Route>
        <Route path="/home" element={<CreateUserDataForm />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
