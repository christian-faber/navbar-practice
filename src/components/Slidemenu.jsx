import { Link } from "react-router-dom";
import "../styles/slidemenu.css";

export const SlideMenu = ({ isOpen, setOpen }) => {
  return (
    <>
      {isOpen && (
        <div
          className={`overlay ${isOpen ? "open" : ""}`}
          onClick={() => {
            setOpen(!isOpen);
          }}
        ></div>
      )}

      <div className={`menu ${isOpen ? "open" : ""}`}>
        {/* <button
          onClick={() => {
            setOpen(false);
          }}
        >
          X
        </button> */}
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
    </>
  );
};
export default SlideMenu;
