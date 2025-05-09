import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const SingleProduct = () => {
    const navigate = useNavigate();
    const { product } = useLocation().state || {};
    const img_url = "https://jay1442.pythonanywhere.com/static/images/";

    const handleCheckout = () => {
        navigate('/placeorder', { state: { totalCost: product.product_cost } });
    };

    return (
        <div className="">
            <Navbar />
            <div className="row justify-content-center mt-3">
                <div className=" col-md-3 card shadow ">
                    <img src={img_url + product.product_photo} alt={product.product_name} />
                </div>
                <div className="col-md-3 card shadow ">
                    <h2>{product.product_name}</h2>
                    <p className="text-muted">{product.product_desc}</p>
                    <p className="text-warning">{product.product_cost}</p>
                    <button className="btn btn-success" onClick={handleCheckout}>
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;



    // import axios from "axios";
// import { useState } from "react";
// import { useLocation, useNavigate} from "react-router-dom";
// import Navbar from "./Navbar";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // Import the CSS

// const SingleProduct = () => {
//     const navigate = useNavigate();
//     const [phone, setPhone] = useState("");
//     const [loading, setLoading] = useState("");
//     const [error, setError] = useState("");

//     const submitForm = async (e) => {
//         e.preventDefault();
//         setLoading("Processing payment...");

//         try {
//             const data = new FormData();
//             data.append("amount", product.product_cost);
//             data.append("phone", phone);

//             // const response = await axios.post("https://jay1442.pythonanywhere.com/api/mpesa_payment", data);
//             const response = await axios.post("https://jay1442.pythonanywhere.com/api/placeorder", data);

//             setLoading("");

//             if (response.data && response.data.message) {
//                 toast.success(response.data.message, {
//                     position: toast.POSITION.TOP_RIGHT, // Adjust position as needed
//                     autoClose: 3000, // Notification disappears after 3 seconds
//                 });
//                 navigate('/placeorder', { state: { totalCost: product.product_cost } });
//             } else {
//                 toast.success("Payment successful!", {
//                     position: toast.POSITION.TOP_RIGHT,
//                     autoClose: 3000,
//                 });
//                 navigate('/placeorder', { state: { totalCost: product.product_cost } });
//             }

//         } catch (err) {
//             setError(err.message);
//             setLoading("");
//             toast.error(`Payment failed: ${err.message}`, {
//                 position: toast.POSITION.TOP_RIGHT,
//                 autoClose: 5000,
//             });
//         }
//     };

//     const { product } = useLocation().state || {};
//     const img_url = "https://jay1442.pythonanywhere.com/static/images/";

//     return (
//         <div className="">
//             <Navbar />
//             <ToastContainer /> {/* Add the ToastContainer component */}
//             <div className="row justify-content-center mt-3">
//                 <div className=" col-md-3 card shadow ">
//                     <img src={img_url + product.product_photo} alt={product.product_name} />
//                 </div>

//                 <div className="col-md-3 card shadow ">
//                     <h2>{product.product_name}</h2>
//                     <p className="text-muted">{product.product_desc}</p>
//                     <p className="text-warning">{product.product_cost}</p>
//                     {loading && <b className="text-warning">{loading}</b>}

//                     <form onSubmit={submitForm}>
//                         <input
//                             type="number"
//                             placeholder="enter amount"
//                             className="form-control"
//                             required
//                             readOnly
//                             value={product.product_cost}
//                         />
//                         <br />

//                         <input
//                             type="tel"
//                             placeholder="enter Mpesa NO 2547xxxxxxxx "
//                             className="form-control"
//                             required
//                             onChange={(e) => setPhone(e.target.value)}
//                         />
//                         <br />

//                         <button className="btn btn-info" type="submit" disabled={loading}>
//                             {loading ? "Submitting..." : "submit"}
//                         </button>
//                     </form>
//                     {error && <b className="text-danger">{error}</b>}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SingleProduct;