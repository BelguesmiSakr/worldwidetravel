import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="text-3xl font-bold underline flex gap-4 p-2 cursor-pointer">
      <span onClick={() => navigate("/")}>Page 1</span>
      <span onClick={() => navigate("/test")}>Page 2</span>
    </div>
  );
}

export default Navbar;
