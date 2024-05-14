import { useNavigate } from "react-router-dom";

interface navElement {
  label: string;
  link?: string;
}

const navLinks: navElement[] = [
  { label: "HOME", link: "/" },
  { label: "DESTINATIONS", link: "/destinations" },
  { label: "PACKAGES", link: "/packages" },
  { label: "PROFILE", link: "/profile" },
  { label: "CONTACT", link: "/contact" },
];

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="text-lg md:text-xl font-normal text-yellow-50 fixed flex items-center justify-between w-available mx-4 my-5 px-5 py-3 bg-slate-50/30 backdrop-blur-sm rounded-md">
      <img
        src="../src/assets/TM_logo 400 x 97px-01.png"
        alt=""
        className="h-8 md:h-10"
      />
      <div className="flex items-center gap-4">
        {navLinks.map((ele, i) => (
          <span
            key={i}
            className="cursor-pointer relative after:content-[''] after:block after:h-[2px] after:bg-yellow-50 after:w-full after:absolute after:left-0 after:bottom-0 after:scale-x-0 after:origin-bottom-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            onClick={() => navigate(ele.link || "/")}
          >
            {ele.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
