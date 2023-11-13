import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingIn from "./components/signIn/SingIn";
import "./App.css";
import SingUp from "./components/signUp/SingUp";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SingIn />} />
          <Route path="/signup" element={<SingUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
