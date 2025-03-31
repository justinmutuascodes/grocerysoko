import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SingleProduct = () => {

    let[amount,setAmount]=useState("")
    let[phone,setPhone]=useState("")
    let[success,setSuccess]=useState("")
    let[loading,setLoading]=useState("")
    let[error,setError]=useState("")

    const submitForm =async(e)=>{
        e.preventDefault();
        setLoading("Processing payment...")
        setSuccess("")

        try {
            const data =new FormData()
            data.append("amount",product.product_cost)
            data.append("phone",phone) 
            
            const response = await axios.post("https://jay1442.pythonanywhere.com/api/mpesa_payment",data)

            setLoading("")
            setSuccess(response.data.message)
        } catch (error) {
            setError(error.message)
        }
    }


    const {product} = useLocation().state||{}; //if it doesnt exist return an empty product
    const img_url="https://jay1442.pythonanywhere.com/static/images/"
    return ( 
        <div className="">
            <Navbar/>
            <div className="row justify-content-center mt-3">
                <div className=" col-md-3 card shadow ">

                        <img src={img_url +product.product_photo} alt="" />
                </div>

                <div className="col-md-3 card shadow ">
                        <h2>{product.product_name}</h2>
                        <p className="text-muted">{product.product_desc}</p>
                        <p className="text-warning">{product.product_cost}</p>
                        <b className="text-warning">{loading}</b>
                        <b className="text-success">{success}</b>

                  <form onSubmit ={submitForm}>
                        <input type="number" placeholder="enter amount" className="form-control" 
                        required readOnly //readonly-you cannot modify
                        value={product.product_cost} >
                            </input><br></br>

                        <input type="tel" placeholder="enter Mpesa NO 2547xxxxxxxx " className="form-control"
                         required onChange={(e)=>setPhone(e.target.value)}>
                            </input><br></br>

                        <button className="btn btn-info">submit</button>
                  </form>      
                </div>
                <Footer/>
            </div>
        </div>
     );
}
 
export default SingleProduct;