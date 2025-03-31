import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is included

const Navbar = () => {
    let [user,setUser]=useState(null);
    let[error,setError] =useState("");
    let [loading,setLoading] =useState("");
    let [username, setUsername] = useState("");
    let [password,setPassword] = useState("")
    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.reload();
        navigate("/");
    };

     
    const submitForm2 = async (e) => {
        e.preventDefault();
        try {
          setError("");
          setLoading("Please wait ...");
    
          const data = new FormData();
          data.append("username", username);
          data.append("password", password);
    
          const response = await axios.post(
            "https://jay1442.pythonanywhere.com/api/signin",
            data
          );
          if (response.data.user) {
            localStorage.setItem("user", JSON.stringify(response.data.user));
            window.location.reload();
            navigate("/");
          } else {
            setLoading("");
            setError(response.data.message);
          }
        } catch (error) {
          setLoading("");
          setError("Something went wrong");
        }
      };
    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container">
                <Link className="navbar-brand" to="/">
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
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>

                
                <div class="">
                {user && (
                    <div className="navbar-nav ms-auto">
                    <b className="text-success nav-link">Hello {user.username}</b>
                    <button className="nav-link" onClick={handleLogout}>
                        Logout
                    </button>
                    </div>
                )}

                {!user && (
                    <div className="navbar-nav ms-auto">
                    <Link to="/signin" class="nav-link">
                        Login
                    </Link>
                    <Link to="/signup" class="nav-link">
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