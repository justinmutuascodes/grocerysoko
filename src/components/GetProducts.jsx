import { useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "./Carousel";
import { useCart } from "./CartContext";
import Chatbot from "./Chatbot";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetProducts = () => {
  let [products, setProducts] = useState([]);
  let [categories, setCategories] = useState([]);
  let [loading, setLoading] = useState("");
  let [error, setError] = useState("");
  let [filteredProducts, setFilteredProducts] = useState([]);
  let [selectedCategory, setSelectedCategory] = useState(null);

  
  // const containerRef = useRef(null);
  const img_url = "https://jay1442.pythonanywhere.com/static/images/";
  const navigate = useNavigate();
  const {addToCart} = useCart("")

  const getProducts = async () => {
    setError("");
    setLoading("Please wait; Receiving products...");
    try {
      const response = await axios.get("https://jay1442.pythonanywhere.com/api/getproducts");
      setLoading("");
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  // const handleChatbotToggle = () => {
  //   if (containerRef.current) {
  //     containerRef.current.classList.toggle('chatbot-visible');
  //   }
  // };

  useEffect(() => {
    getProducts();
  }, [])
  console.log(products)

  useEffect(() => {
    // Extract unique categories from the products data
    const uniqueCategories = [...new Set(products.map((product) => product.category))];
    setCategories(uniqueCategories.map((cat, index) => ({ id: index, name: cat })));
  }, [products]); // Re-run when products update

  const handleSearch = (value) => {
    const filtered = products.filter((product) =>
      product.product_name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
    setSelectedCategory(null);
  };

  const filterByCategory = (categoryName) => {
    setSelectedCategory(categoryName);
    const filtered = products.filter((product) => product.category === categoryName);
    setFilteredProducts(filtered);
  };

    const handleAddToCart = (product) => {
      addToCart(product);
      toast.success(`${product.product_name} added to cart!`);
    };

  return (
    <div className="row">
      <Navbar />
      <Carousel />

      <div className="row justify-content-center my-4">
        <h3>Shop by Category</h3>
        <div className="col-md-8 d-flex flex-wrap justify-content-center">
          <button
            className={`btn btn-outline-primary m-2 ${selectedCategory === null ? 'active' : ''}`}
            onClick={() => {
              setFilteredProducts(products);
              setSelectedCategory(null);
            }}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`btn btn-outline-primary m-2 ${selectedCategory === category.name ? 'active' : ''}`}
              onClick={() => filterByCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <h3>{selectedCategory ? `${selectedCategory} Products` : 'Available Products'}</h3>

      <b className="text-danger">{error}</b>
      <b className="text-warning">{loading}</b>

      <div className="row justify-content-center my-4">

        <div className="col-md-3">
          <input
            type="text"
            placeholder="Search Product by name"
            className="form-control"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>

      {filteredProducts.map((product) => (
        <div className="col-md-3 justify-content-center mb-4" key={product.id}>
          <div className="card shadow">
            <img src={img_url + product.product_photo} alt={product.product_name} className="product_img mt-4" />
            <div className="card-body">
              <h5 className="mt-2">{product.product_name}</h5>
              <p className="text-muted">{product.product_desc}</p>
              <b className="text-warning">ksh {product.product_cost}</b>
              <button onClick={() => navigate("/product",{state: {product}})} className="btn btn-dark mt-2 w-100" id="productcardbtn">View Details</button>
              {/* <button onClick={() => addToCart (product)} className="btn btn-warning mt-2 w-100" id="productcardbtn"> Add to Cart</button> */}
              <button onClick={() => handleAddToCart(product)} className="btn btn-warning mt-2 w-100" id="productcardbtn"> Add to Cart</button>


            </div>
          </div>
        </div>
        
      ))}
      <br /><br />
      {/* <div className="chatbot-container" ref={containerRef}>
      <img
        src="images/chatbotmessage.jpg"
        alt="Chatbot"
        className="chatbot-toggle-image"
        onClick={handleChatbotToggle}
      />
      <div className="chatbot-wrapper">
        <Chatbot />
      </div>
    </div> */}
    <Chatbot/>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
export default GetProducts;