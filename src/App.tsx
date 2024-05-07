import { Routes, Route } from "react-router-dom";
import "./App.css";
import Counter from "./pages/counter.exemple";
import Test from "./pages/routerTest";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
