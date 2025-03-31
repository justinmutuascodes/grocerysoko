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

    let [loading, setLoading] = useState("");
    let [success, setSuccess] = useState("");
    let [error, setError] = useState("");

    const navigate = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            setLoading("Please wait as your data is being submitted");
            const input = new FormData();
            input.append("username", username);
            input.append("email", email);
            input.append("phone", phone);
            input.append("password", password);

            const posting = await axios.post("https://jay1442.pythonanywhere.com/api/signup", input);


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

                    <div className="input-group">
                        <input 
                        type="password" 
                        placeholder="Create password" 
                        required 
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}/>
                        <span className="input-group-text"><i class="bi bi-eye"></i></span>
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