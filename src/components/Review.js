import React, { useContext, useState } from 'react';
import { Store } from '../context/Store';
import { ReactComponent as Logo } from "../icons/food-logo.svg";
import { useNavigate } from 'react-router-dom';
import OrderModal from './OrderModal';

const Review = () => {
    let navigate = useNavigate();
    const { state, dispatch } = useContext(Store);
    const { orderItems, itemsCount, totalPrice, taxPrice, orderType } = state.order;
    const [ quantity, setQuantity ] = useState(1);
    const [ product, setProduct ] = useState(Object);

    const productClickHandler = (p) => {
      setProduct(p);
    };
   
    return (
        <div className="review-container">
            <OrderModal 
              product={product}
              dispatch={dispatch} 
              setQuantity={setQuantity} 
              quantity={quantity} 
              orderItems={orderItems} 
            />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 review-body">
                        <div className="container">
                            <div className="review-header text-center">
                                <Logo />
                                <h2>Review Your {orderType} Order</h2>
                            </div>
                            <div className="row g-4">
                                {orderItems.map((orderItem) => (
                                    <div className="col-md-12" key={orderItem.name}>
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row justify-content-between text-center">
                                                    <div className="col-md-2">
                                                        <h5 className="card-title">{orderItem.name}</h5>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div className="d-grid gap-2">
                                                            <button 
                                                            className="btn btn-secondary btn-lg"
                                                            data-bs-toggle="modal" 
                                                            data-bs-target="#quantityModal"
                                                            onClick={() => productClickHandler(orderItem)}
                                                            >
                                                                Edit
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row text-center">
                                                    <div className="col-md-2">
                                                        <img alt={orderItem.name} src={orderItem.image} />
                                                    </div>
                                                </div>
                                                <div className="row row justify-content-between text-center">
                                                    <div className="col-md-2">
                                                        <p className="card-text text-mute">{orderItem.calorie} Cal</p>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <h5>{orderItem.quantity} x ${orderItem.price}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>            
                </div>
                <div className="review-footer">
                    <div className="container">
                        <div className="alert alert-primary order-tracker" role="alert">
                            My Order - {orderType} | Tax: ${taxPrice} | Total: ${totalPrice} | Items: {itemsCount}
                        </div>
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="d-grid gap-2">
                                    <button 
                                    onClick={() => {
                                        navigate('/order');
                                    }}
                                    className="btn btn-secondary btn-lg" 
                                    type="button"
                                    >
                                        Back
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-grid gap-2">
                                    <button 
                                    onClick={() => navigate('/select-payment')}
                                    className="btn btn-success btn-lg" 
                                    type="button"
                                    disabled={orderItems.length === 0}
                                    >
                                        Proceed To Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;