import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const AboutUs = () => {
    return (
        <div className="" id="aboutus">
            <Navbar/>


            <div class="why-choose-us">
                <h2>Why Choose GoGetGroceries?</h2>
                <div class="reasons">
                    <div class="reason">
                    <i class="bi bi-truck"></i> <h3>Fast Delivery</h3>
                    <p>Get your groceries delivered right to your door in minutes.</p>
                    </div>
                    <div class="reason">
                    <i class="bi bi-leaf"></i>
                    <h3>Fresh & High Quality</h3>
                    <p>We partner with local farmers for the freshest produce.</p>
                    </div>
                    <div class="reason">
                    <i class="bi bi-hand-thumbs-up"></i>
                    <h3>Excellent Service</h3>
                    <p>Our team is dedicated to your satisfaction.</p>
                    </div>
                    </div>
                </div>

        <section className="row p-4">
            <div className="col-md-4 about-us-paragraph text-center card shadow m-2">
                <div className="card-body">
                <b>About us</b>
                <p id="desc">"We believe everyone deserves access to the freshest, highest-quality groceries. That's why GoGetGroceries partners with local farmers and trusted suppliers to bring you the best. From vibrant fruits and vegetables to essential pantry items, we ensure every product meets our rigorous standards. Taste the difference quality makes, delivered straight to your home."</p>
                <span className="">~Justin Mutua</span>

                </div>
            </div>

            <div className="col-md-4 card m-2 p-4">
            <div className="card-body">
                <b>Vision</b><p>~Get yourself what you need within minutes~</p>
                </div>
            </div>

            <div className="col-md-3 card m-2 p-4">
            <div className="card-body">
                <b>Mission</b><p>~Making Life Easier~</p>
            </div>
            </div>


            </section>
        </div>
     );
}
 
export default AboutUs;