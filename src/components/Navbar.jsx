import Hamburger from "hamburger-react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

export const Navbar = ({ isOpen, setOpen }) => {
  //   const [isOpen, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">🦕</div>
      <h1>Dinosaur</h1>
      <div className="bun">
        <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
      </div>
      {/* <div className="slidie-mcslide-pants">
        <SlideMenu isOpen={isOpen} setOpen={setOpen} />
      </div> */}
      <div className="dollar-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/meteors">☄️</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
