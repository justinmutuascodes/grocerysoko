import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import Footer from "./Footer";


const SignIn = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    let [loading, setLoading] = useState("");
    let [success, setSuccess] = useState("");
    let [error, setError] = useState("");

    const submitForm = async (event) => {
        event.preventDefault();
        const data = new FormData();
        try {
            setLoading("Please wait as your data is being confirmed.");
            data.append("username", username);
            data.append("password", password);

            const response = await axios.post("https://jay1442.pythonanywhere.com/api/signin", data);
            console.log(response.data.message);
            setUsername("");
            setPassword("");
            setLoading("");
            setSuccess("");
        } catch (error) {
            setError("Something went wrong...");
        }
    };

    const togglePassword = () => {
        const passwordInput = document.getElementById("password");
        const icon = document.getElementById("icon");

        let current_type = passwordInput.getAttribute("type");
        let new_type = "";
        if (current_type === "password") {
            new_type = "text";
            icon.classList.remove("bi bi-eye")
            icon.classList.add("bi bi-eye-slash")
        } else {
            new_type = "password";
        }
        passwordInput.setAttribute("type", new_type);
    };

    return (
        <div className="container-fluid">
            <Navbar />
            <div className="justify-content-center row">
                
        <b className="text-warning">{loading}</b>
        <b className="text-success">{success}</b>
        <b className="text-danger">{error}</b>
                <div className="col-md-5 card shadow p-4 mt-5" id="signinCard">
                    <form action="" onSubmit={submitForm}>
                        <h3 className="text-success">Welcome back!! Sign in</h3>
                        <input
                            type="text"
                            placeholder="Create your username"
                            required
                            className="form-control"
                            onChange={(e) => setUsername(e.target.value)}
                        /><br />

                        <div className="input-group">
                            <input
                                type="password"
                                id="password"
                                placeholder="Create password"
                                required
                                className="form-control"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="input-group-text" onClick={togglePassword}><i id="icon" className="bi bi-eye"></i></span> {/* Corrected line */}
                        </div>

                        <button type="submit" className="btn btn-outline-success" id="signinbtn">Sign In</button><br />
                        <b>You don't have an account?</b><Link to="/signup">Sign Up</Link>
                    </form>
                </div>
            </div>

            <br /><br /><br />
            <Footer />
        </div>
    );
};

export default SignIn;


//extract----kotlin C ----cut
//local dist c ---paste

//open folder bin