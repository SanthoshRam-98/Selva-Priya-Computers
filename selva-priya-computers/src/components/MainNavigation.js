import { Link } from "react-router-dom";
function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/services">ServicesPage</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
