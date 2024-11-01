import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";

import PetRegistration from "./pages/PetRegistration";
import AddNewOwner from "./pages/AddNewOwner";
import AddQuickClient from "./pages/AddQuickClient";
import Navbb from "./component/Navbb";
import Dashboard from "./pages/DashBoard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        {/* <Navbb hello={10}/> */}
        <Routes>
          <Route path="/" element={<ForgotPassword />} />
          <Route path="/PetRegistration" element={<PetRegistration />} />
          <Route path="/addnewOwner" element={<AddNewOwner />} />
          <Route path="/addquickClient" element={<AddQuickClient />} />
          {/* <Route path="/nn" element={<Navbb />} /> */}
          <Route path="/Dashboard" element={<Dashboard />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
