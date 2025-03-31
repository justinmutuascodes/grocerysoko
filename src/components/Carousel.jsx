import { Link } from "react-router-dom";

const Carousel = () => {
    return (
        <div className="col-md-12">
            <div className="carousel slide" data-bs-ride="carousel" id="mycarousel" style={{ height: '400px' }}> {/* Set carousel height */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="/images/dairiesgrocery.jpg"
                            className="d-block w-100 text-success"
                            alt=""
                            style={{ height: '400px', objectFit: 'cover'}} // Set image height and object-fit
                        />
                    </div>

                    <div className="carousel-item">
                        <img
                            src="/images/deliverykaimage.jpg" // Corrected path
                            alt=""
                            className="d-block w-100"
                            style={{ height: '400px', objectFit: 'cover' }} // Set image height and object-fit
                        />
                    </div>

                    <div className="carousel-item">
                        <img
                            src="/images/generalgrocerycarooo.jpg" // Corrected path
                            className="d-block w-100"
                            alt=""
                            style={{ height: '400px', objectFit: 'cover' }} // Set image height and object-fit
                        />
                    </div>

                    <div className="carousel-item">
                        <img
                            src="/images/onphonenow.jpg" // Corrected path
                            className="d-block w-100"
                            alt=""
                            style={{ height: '400px', objectFit: 'cover' }} // Set image height and object-fit
                        />
                    </div>
                </div>

                <Link to="#mycarousel" className="carousel-control-prev" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </Link>

                <Link to="#mycarousel" className="carousel-control-next" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </Link>

                <div className="carousel-indicators">
                    <li data-bs-slide-to="0" className="active" data-bs-target="#mycarousel"></li>
                    <li data-bs-slide-to="1" data-bs-target="#mycarousel"></li>
                    <li data-bs-slide-to="2" data-bs-target="#mycarousel"></li>
                    <li data-bs-slide-to="3" data-bs-target="#mycarousel"></li>
                </div>

                <div className="carousel-caption" id="caption">
                    <p>Freshness delivered to your door! Explore our wide selection of quality groceries, from farm-fresh produce to pantry staples. Order now and enjoy convenient, reliable delivery. Your kitchen's best friend is just a click away!</p>
                </div>
            </div>
        </div>
    );
};

export default Carousel;