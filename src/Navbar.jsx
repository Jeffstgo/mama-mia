const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Pizzería Mamma Mia
        </a>
        <div className="d-flex gap-2">
          <button className="btn btn-light">🍕 Home</button>
          {token ? (
            <>
              <button className="btn btn-success">🔓 Profile</button>
              <button className="btn btn-danger">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-primary">🔐 Login</button>
              <button className="btn btn-secondary">🔐 Register</button>
            </>
          )}
        </div>
        <button className="btn btn-warning ms-auto">
          🛒 Total: ${total.toLocaleString()}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
