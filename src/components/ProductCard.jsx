import React from 'react';
import { useCart } from './CartContext'; // Assuming your CartContext is in './CartContext'
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Make sure to import the CSS globally or in a parent component
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const img_url = "https://jay1442.pythonanywhere.com/static/images/";

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.product_name} added to cart successfully!`, {
      position: "top-right", // You can change the position
      autoClose: 2000, // Duration the toast will be visible (in milliseconds)
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light", // You can also use "dark"
    });
  };

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow">
        <img
          src={img_url + product.product_photo}
          alt={product.product_name}
          className="card-img-top"
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.product_name}</h5>
          <p className="card-text text-muted">{product.product_desc}</p>
          <p className="text-warning fw-bold">{product.product_cost} KSh</p>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-sm btn-outline-primary" onClick={handleViewDetails}>
              View Details
            </button>
            <button className="btn btn-sm btn-success" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;