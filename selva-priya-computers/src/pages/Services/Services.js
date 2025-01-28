import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
      <h1>All Products</h1>
      <nav>
        <ul>
          <li>
            <Link to="/services/wedding-cards">Wedding Cards</Link>
          </li>
          <li>
            <Link to="/services/display-banner">Display Banner</Link>
          </li>
          <li>
            <Link to="/services/invoice-books">Invoice Books</Link>
          </li>
          <li>
            <Link to="/services/notice-prints">Notice Prints</Link>
          </li>
          <li>
            <Link to="/services/thampoolam-baf">Thampoolam Baf</Link>
          </li>
          <li>
            <Link to="/services/sunpack-boards">Sunpack Boards</Link>
          </li>
          <li>
            <Link to="/services/photo-printings">Photo Printings</Link>
          </li>
          <li>
            <Link to="/services/buisness-cards">Business Cards</Link>
          </li>
          <li>
            <Link to="/services/letter-pads">Letter Pads</Link>
          </li>
          <li>
            <Link to="/services/sign-boards">Sign Boards</Link>
          </li>
          <li>
            <Link to="/services/calendars">Calendars</Link>
          </li>
          <li>
            <Link to="/services/label-stickers">Label Stickers</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Services;
