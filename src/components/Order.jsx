import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer, Position } from 'react-toastify'; // Correct import: Position
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';

const Order = () => {
    const location = useLocation();
    const { totalCost } = location.state || {};
    const navigate = useNavigate();

    const [full_name, setfull_name] = useState('');
    const [shipping_address, setshipping_address] = useState('');
    const [phone_number, setphone_number] = useState('');
    const [order_date] = useState(new Date().toISOString());
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    // const [successMessage, setSuccessMessage] = useState('');

    const handlePlaceOrder = async (e) => {
        e.preventDefault();
        setLoading('Placing Order and Initiating Payment...');
        setError('');
        // setSuccessMessage('');

        const formData = new FormData();
        formData.append("full_name", full_name);
        formData.append("shipping_address", shipping_address);
        formData.append("total_cost", totalCost);
        formData.append("phone_number", phone_number);
        formData.append("order_date", order_date);

        try {
            const orderResponse = await axios.post("https://jay1442.pythonanywhere.com/api/placeorder", formData); // Changed endpoint

            // setSuccessMessage(orderResponse.data.Success);
            // toast.success(orderResponse.data.Success, {
            //     // position: Position.TOP_RIGHT, // Correct usage: Position (uppercase P)
            //     autoClose: 3000,
            // });
            toast.success('M-Pesa prompt sent to your phone. Please check and complete the payment.');

            // Optionally navigate to an order confirmation page
            navigate('/' ); // Example: Go back to product list after order

        } catch (orderError) {
            setError('Failed to place order: ' + orderError.message);
            toast.error('Failed to place order: ' + orderError.message, {
                // position: Position.TOP_RIGHT, // Correct usage: Position (uppercase P)
                autoClose: 5000,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="placeorder">
            <Navbar/>
            <div className="orders-container">

                <h2 className='checkout-heading'>Checkout</h2>
                {/* {successMessage && <div className="alert alert-success">{successMessage}</div>} */}
                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handlePlaceOrder} className="order-form">
                    <div className="form-group">
                        <label htmlFor="full_name">Full Name:</label>
                        <input
                            type="text"
                            id="full_name"
                            className="form-control"
                            value={full_name}
                            onChange={(e) => setfull_name(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="shipping_address">Shipping Address:</label>
                        <textarea
                            id="shipping_address"
                            className="form-control"
                            value={shipping_address}
                            onChange={(e) => setshipping_address(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone_number">Phone Number (for M-Pesa):</label>
                        <input
                            type="tel"
                            id="phone_number"
                            className="form-control"
                            placeholder="Enter MPesa Number (254XXXXXXXXX)"
                            value={phone_number}
                            onChange={(e) => setphone_number(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="totalCost">Total Cost:</label>
                        <input
                            type="text"
                            id="totalCost"
                            className="form-control"
                            value={totalCost}
                            readOnly
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="order_date">Order Date:</label>
                        <input
                            type="text"
                            id="order_date"
                            className="form-control"
                            value={order_date}
                            readOnly
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Placing Order...' : 'Place Order & Pay'}
                    </button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Order;