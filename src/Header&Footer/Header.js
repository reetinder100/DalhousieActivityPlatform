import { HeaderContainer } from "../styling/HeaderStyle";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderContainer>
      <h2>Experience Dalhousie</h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          to="/things-to-do"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <h3>Things to do</h3>
        </Link>
        <Link
          to="/popular-locations"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <h3>Popular locations</h3>
        </Link>
      </div>

      <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
        <h3>Contact Us</h3>
      </Link>
    </HeaderContainer>
  );
};
