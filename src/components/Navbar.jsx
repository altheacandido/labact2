

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <div className="nav-img">
          <img src="/logo.png" alt="POP MART" className="logo" />
        </div>
        <nav className="nav-menu">
          {['New & Featured', 'SERIES', 'MEGA', 'TYPES', 'ACCESSORIES'].map((item, index) => (
            <a key={index} href="#">{item}</a>
          ))}
        </nav>
      </div>
      <div className="user-actions">
        <img src="/navbar.png" alt="User Actions" className="navbar-icons" />
      </div>
    </header>
  );
}

export default Navbar;
