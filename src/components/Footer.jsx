import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
    return (
        <div className="Footer bg-dark text-light p-4" id="foot"> {/* Added bg-dark and text-light, and padding */}
            <div className="container"> {/* Added a container for better responsiveness */}
                <div className="row">
                    <div className="col-md-3">
                        <Link to="/" className="text-decoration-none text-light"> {/* Added text-decoration-none and text-light */}
                            <img src="/images/GoGetGroceries.png" height="80px" width="80px" alt="GoGetGroceries Logo" id="logofoot" />
                            GoGetGroceries!!
                        </Link>
                        <br />
                        <b>Founder:</b> Justin Mutua<br />
                        <b>Year founded:</b> 2025.<br />
                        <div>
                            <b>Contact Info</b><br />
                            <Link to="https://www.instagram.com/" target="_blank" className="text-light"><i className="bi bi-instagram" id="icons"></i> </Link>
                            <Link to="https://web.facebook.com/?_rdc=1&_rdr#" target="_blank" className="text-light"><i className="bi bi-facebook"></i> </Link>
                            <Link to="https://x.com/" target="_blank" className="text-light"><i className="bi bi-twitter-x"></i> </Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h1>ABOUT US</h1>
                        <p>We are an ecommerce company seeking to bring out the best out of online shopping specifically of groceries. Have you ever felt too lazy to go shopping? Well, worry no more because we got you covered. Order whatever you need at the comfort of your home. It will be delivered within minutes. Trust.</p>
                    </div>
                    <div className="col-md-4">
                        <h4 className="text-center">Drop a review</h4>
                        <form action="">
                            <input type="email" className="form-control" placeholder="Enter your email" /><br />
                            <textarea className="form-control" placeholder="Leave us a review" rows="5"></textarea><br /> {/* Reduced rows for better layout */}
                            <input type="submit" className="btn btn-outline-danger" value="Send Message" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="container mt-4" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}> {/* Added container and mt-4 for spacing */}
                <b className="text-light">&copy; All rights reserved</b>
                <p className="pe-4">Privacy Policy</p> {/* Removed text-light from privacy policy */}
            </div>
        </div>
    );
};

export default Footer;