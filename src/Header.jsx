import "./HeaderStyle.css";

function Header() {
  return (
    <>
      <div className="header-items">
        <img
          className="logo"
          src="https://dreieck.com/en/wp-content/uploads/sites/2/2023/03/opened-book-09-final-touch-1536x1152.png"
        />
        <ul className="nav-items">
          <li>Home</li>
          <li>My Books</li>
          <li>Profile</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
