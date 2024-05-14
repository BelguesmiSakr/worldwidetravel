import { Routes, Route } from "react-router-dom";
import "./App.css";

import Landing from "./pages/landing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/destinations" element={<Landing />} />
        <Route path="/packages" element={<Landing />} />
        <Route path="/profile" element={<Landing />} />
        <Route path="/contact" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
