import { useEffect, useState } from "react";
import axios from "axios";
import { data, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "./Carousel";

const GetProducts = () => {
   let [products,setProducts]= useState([]);
   let [loading,setLoading] = useState("");
   let [error,setError] = useState("");
   let [filteredProducts,setFilteredProducts] = useState([]);

   const img_url = "https://jay1442.pythonanywhere.com/static/images/";
   const navigate = useNavigate();


   //function to fetch products from API
   const getProducts =  async () => {
      setError("")
      setLoading("Please wait; Receiving products...")
      try {
         const response = await axios.get("https://jay1442.pythonanywhere.com/api/getproducts");
         console.log(response.data);
         setLoading("")
         setProducts(response.data);
         setFilteredProducts(response.data)
         navigate("/")
      } catch (error) {
         setLoading("");
         setError(error.message);
      }
   };

   const handleSearch = (value)=>{
      const filtered = products.filter((product)=>//predicated function?
         product.product_name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered)
   };

   useEffect(() => {
      getProducts();
   },[]);

    return ( 
      <div className="row">
         <Navbar/>
         <Carousel/>
         <h3>Available Products</h3>
         
         <b className="text-danger">{error}</b>
         <b className="text-warning">{loading}</b>
      
      <div className="row justify-content-center my-4">
         <div className="col-md-4">
            <input type="text" placeholder="Search Product by name" className="form-control" onChange={(e)=> handleSearch(e.target.value)}/>
         </div>
      </div>
      {filteredProducts.map((product)=>(
         <div className="col-md-4 justify-content-center mb-4" key={product.id}>
            <div className="card shadow">
               <img src={img_url + product.product_photo} alt="" className="product_img mt-4" />
               <div className="card-body">
                  <h5 className="mt-2">{product.product_name}</h5>
                  <p className="text-muted">{product.product_desc.slice(0,10)}</p>
                  <b className="text-warning">ksh {product.product_cost}</b>
                  <button className="btn btn-success mt-2 w-100" onClick={()=>navigate("/Product",{state:{product}})}>View Product</button>
               </div>
            </div>
         </div>
      ))}
   <Footer/>
 
      </div>
    )
}
 
export default GetProducts;