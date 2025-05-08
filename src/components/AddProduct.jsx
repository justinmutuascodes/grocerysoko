import axios from "axios";
import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AddProduct = () => {
    let [product_cost, setProductCost] = useState("");
    let [product_desc, setProductDesc] = useState("");
    let [product_name, setProductName] = useState("");
    let [product_photo, setProductPhoto] = useState(null);
    let [category, setCategory] = useState("");

    let [loading, setLoading] = useState("");
    let [success, setSuccess] = useState("");
    let [error, setError] = useState("");

    const fileInputRef = useRef(null);

    const submitForm = async (e) => {
        e.preventDefault();
 
        try {
            setLoading("Please wait while we submit your data");
            setSuccess("");
            setError("");
            const data = new FormData();
            data.append("product_name", product_name);
            data.append("product_desc", product_desc);
            data.append("product_cost", product_cost);
            data.append("product_photo", product_photo);
            data.append("category", category);
            
            const response = await axios.post("https://jay1442.pythonanywhere.com/api/addproduct", data);

            setSuccess("Product added successfully!");
            setLoading("");
            setProductName("");
            setProductDesc("");
            setProductCost("");
            setProductPhoto(null);
            setCategory(""); // Clear category input

            // Removed: setError("Failed to add product.");
            setLoading("");

        } catch (err) {
            setError(err.message);
            setLoading("");
            console.error(err);
        }
    };
    
    return (
        <div className="row justify-content-center mt-4">
            <Navbar/>
            <div className="col-md-6 card shadow p-4">
                <h2>Add Product</h2>
                <b className="text-warning">{loading}</b>
                <b className="text-danger">{error}</b>
                <b className="text-success">{success}</b>

                <form onSubmit={submitForm}>
                    <input
                        value={product_name}
                        type="text"
                        placeholder="Enter Product Name"
                        required
                        onChange={(e) => setProductName(e.target.value)}
                        className="form-control"
                    />
                    <br />

                    <textarea
                        value={product_desc}
                        placeholder="Enter Product Description"
                        required
                        className="form-control"
                        onChange={(e) => setProductDesc(e.target.value)}
                    />
                    <br />

                    <input
                        value={product_cost}
                        type="number"
                        placeholder="Enter Product Cost"
                        className="form-control"
                        required
                        onChange={(e) => setProductCost(e.target.value)}
                    />
                    <br />

                    <input
                        ref={fileInputRef}
                        type="file"
                        required
                        className="form-control"
                        onChange={(e) => setProductPhoto(e.target.files[0])}
                    />
                    <br />

                    <input
                        value={category}
                        type="text"
                        placeholder="Enter category"
                        className="form-control"
                        required
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <br />

                    {/* <select 
                        name="" 
                        id=""                         
                        className="form-control"
                        value={category}
                        required
                        onChange={(e) => setCategory(e.target.value)}>
                            <option value="">Select Category</option>
                            <option value="">Fruits</option>
                            <option value="">Vegetables</option>
                            <option value="">Baked Products</option>
                            <option value="">Meat</option>
                            <option value="">Dairy Products</option>
                            <option value="">Beverages</option>
                    </select> */}


<br /><br />
                    <button className="btn btn-primary">Add Product</button>
                </form>
            </div>
<br /><br />
            <Footer/>
        </div>
    );
};

export default AddProduct;