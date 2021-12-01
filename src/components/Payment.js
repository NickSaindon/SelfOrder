import React from 'react';
import { ReactComponent as Logo } from "../icons/food-logo.svg";
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    let navigate = useNavigate();

    return (
        <div className="payment-container text-center">
            <div className="container">
                <div className="row">
                    <Logo />
                    <h1>Please follow the instructions on the PIN pad</h1>
                    <div class="text-center">
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <div className="payment-footer">
                        <div className="container">
                            <div className="row g-4">
                                <div className="col-md-12">
                                    <div class="d-grid gap-2">
                                        <button 
                                          onClick={() => navigate('/complete-order')}
                                          className="btn btn-secondary btn-lg" 
                                          type="button"
                                        >
                                            Complete Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;