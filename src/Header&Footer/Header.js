import { HeaderContainer } from "../styling/HeaderStyle";
import { Link } from "react-router-dom";
import { useScrollDirection } from "../Hooks/useScrollDirection";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { scrollDirection, isAtTop } = useScrollDirection();
  const isScrolled = !isAtTop;
  const isVisible = isAtTop || scrollDirection === "up";
  const navigate = useNavigate();

  const classes = [
    isScrolled ? "scrolled" : "",
    isVisible ? "visible" : "hidden",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <HeaderContainer className={classes}>
      <h2 className="logo" onClick={() => navigate("/")}>
        Experience Dalhousie
      </h2>

      <div className="nav-links">
        <Link to="/things-to-do" className="nav-link">
          <h3 className="nav-text">Things to do</h3>
        </Link>
        <Link to="/popular-locations" className="nav-link">
          <h3 className="nav-text">Popular locations</h3>
        </Link>
      </div>

      <Link to="/contact" className="contact-btn">
        <h3 className="contact-text">Contact Us</h3>
      </Link>
    </HeaderContainer>
  );
};
