import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SignUp = () => {
    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [password, setPassword] = useState("");
    let [showPassword, setShowPassword] = useState(false);
    let [passwordErrors, setPasswordErrors] = useState([]);
    let [isPasswordValid, setIsPasswordValid] = useState(false);

    let [loading, setLoading] = useState("");
    let [success, setSuccess] = useState("");
    let [error, setError] = useState("");

    const navigate = useNavigate();

    const validatePassword = (pwd) => {
        const newErrors = [];
        let valid = true;

        if (pwd.length < 12) {
            newErrors.push('Password must be at least 12 characters long.');
            valid = false;
        }
        if (!/[a-z]/.test(pwd)) {
            newErrors.push('Password must contain at least one lowercase letter.');
            valid = false;
        }
        if (!/[A-Z]/.test(pwd)) {
            newErrors.push('Password must contain at least one uppercase letter.');
            valid = false;
        }
        if (!/[0-9]/.test(pwd)) {
            newErrors.push('Password must contain at least one number.');
            valid = false;
        }
        if (!/[%#$@]/.test(pwd)) {
            newErrors.push('Password must contain at least one of the following special characters: @%#$.');
            valid = false;
        }
        if (/[^a-zA-Z0-9%#$@]/.test(pwd)) {
            newErrors.push('Password can only contain letters, numbers, and the special characters: @%#$.');
            valid = false;
        }

        setPasswordErrors(newErrors);
        setIsPasswordValid(valid);
        return valid;
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        validatePassword(newPassword);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const submitForm = async (e) => {
        e.preventDefault();
        if (!isPasswordValid) {
            setError("Please ensure your password meets the strong password requirements.");
            return;
        }
        try {
            setLoading("Please wait as your data is being submitted");
            const input = new FormData();
            input.append("username", username);
            input.append("email", email);
            input.append("phone", phone);
            input.append("password", password);

            const response = await axios.post("https://jay1442.pythonanywhere.com/api/signup", input);
            console.log(response.input.message);

            setSuccess("Submission is done. Welcome.");
            setLoading("");
            setError(""); // Clear any previous errors
            navigate("/")
            setSuccess("")


        } catch (err) {
            setError("Something went wrong. Try again.");
            setLoading("");
            console.error(err);
        }
    };

    return (
        <div className="" id="signupbody">
            <Navbar />
            <div className="justify-content-center row">
                <div className="col-md-5 card shadow p-4 mt-5 pt-3" id="signupCard">
                    <b className="text-warning">{loading}</b>
                    <b className="text-success">{success}</b>
                    <b className="text-danger">{error}</b>

                    <form action="/" className="m-4" id="signupform" onSubmit={submitForm}>
                        <h2 className="text-success">SIGN UP TO START</h2>

                        <input
                            value={username}
                            type="text"
                            placeholder="Create your username"
                            required
                            className="form-control"
                            onChange={(e) => setUsername(e.target.value)} /><br />

                        <input
                            value={email}
                            type="email"
                            placeholder="Enter Email"
                            required
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)} /><br />

                        <input
                            value={phone}
                            type="tel"
                            placeholder="Enter phone number"
                            required
                            className="form-control"
                            onChange={(e) => setPhone(e.target.value)} /><br />

                        <div className="mb-3">
                            <div className="input-group">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    placeholder="Create password"
                                    required
                                    className="form-control"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                                <button
                                    className="btn btn-outline-secondary form-control eye"
                                    style={{}}
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                >
                                    <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                                </button>
                            </div>
                            {passwordErrors.length > 0 && (
                                <ul className="text-danger mt-2">
                                    {passwordErrors.map((err, index) => (
                                        <li key={index}>{err}</li>
                                    ))}
                                </ul>
                            )}
                            {isPasswordValid && passwordErrors.length === 0 && (
                                <p className="text-success mt-2">Password is strong!</p>
                            )}
                        </div>

                        <button className="btn btn-outline-success" type="submit" id="signupbtn">Sign Up</button><br />
                        <b>Already have an account?</b><Link to="/signin">Sign in</Link>
                    </form>
                </div>
            </div><br /><br />
            <Footer />
        </div>
    );
};

export default SignUp;