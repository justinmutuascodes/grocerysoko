import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "./Carousel";
const AboutUs = () => {
    return (
        <div className="">
            <Navbar/>
            <Carousel/>
            <div className="col-md-5">
                <p id="desc">We believe everyone deserves access to the freshest, highest-quality groceries. That's why GoGetGroceries partners with local farmers and trusted suppliers to bring you the best. From vibrant fruits and vegetables to essential pantry items, we ensure every product meets our rigorous standards. Taste the difference quality makes, delivered straight to your home.</p>
            </div>

            <div className="col-md-3">
                <b>Vision</b><p>~Get yourself what you need within minutes~</p>
                <b>Mission</b><p>Making Life Easier</p>
            </div>

            <div className="col-md-4">
                
            </div>
            <Footer/>
        </div>
     );
}
 
export default AboutUs;