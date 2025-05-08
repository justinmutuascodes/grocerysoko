import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCart } from "./CartContext";

const Navbar = () => {
  let [user, setUser] = useState(null);
  const navigate = useNavigate();
  const {cart} = useCart();

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
    navigate("/");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm" style={{  alignItems: 'center', justifyContent: 'flex-start', padding: '10px' }}>
      <div className="container navbar-container">
      <Link className="navbar-logo logo" to="/">
        <img src="images/gogetgroceriescircle.png" alt="" style={{ height: '100px', marginRight: '10px' }} />
       {/* </Link>
        <Link className="navbar-logo" to="/"> */}
          GoGetGroceries
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse navbar-links">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">



              <Link className="navbar-link" to="/">
                Home
              </Link>


              <Link className="navbar-link" to="/aboutus">
                About Us
              </Link>
              
              <Link className="navbar-link" to="/contactus">
                Contact us
              </Link>


          </ul>
          <div>

            {user && ( 
              <div className="navbar-nav ms-auto navbar-links">
                <span className="text-success nav-link">Hello {user.username}</span>
                <button className="nav-link" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
            {!user && (
              <div className="navbar-nav ms-auto navbar-links" style={{ display: 'flex', alignItems: 'center' }}>    
                <Link to="/cart" className="nav-link position-relative" id="cart">
                  <img src="images/cartcircle.png" height="80px" alt="Cart" />
                  {cart && cart.length > 0 && (
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                      style={{ fontSize: "0.6rem" }}
                    >
                      {cart.length}
                    </span>
                  )}
                </Link>
                <Link to="/signin" className="navbar-login">
                  Login
                </Link>
                <Link to="/signup" className="navbar-signup">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;