import React, { useContext, useEffect } from 'react';
import { ReactComponent as Logo } from "../icons/food-logo.svg";
import { useNavigate } from 'react-router-dom';
import { Store } from '../context/Store';
import { createOrder } from '../context/actions/createOrderActions';

const Complete = () => {
    let navigate = useNavigate();
    const { state, dispatch } = useContext(Store);
    const { order } = state;
    const { loading, error, newOrder } = state.orderCreate;
  
    useEffect(() => {
      if (order.orderItems.length > 0) {
        createOrder(dispatch, order);
      }
    }, [dispatch, order]);

    return (
        <div className="complete-container text-center">
            <div className="container">
                <div className="row justify-content-md-center">
                    <Logo />
                    {loading ? (
                        <div class="d-flex justify-content-center">
                            <div class="spinner-border text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                      </div>
                    ) : error ? (
                        <div class="alert alert-danger" role="alert">
                            {error}
                        </div>
                    ) : (
                        <>
                            <h2>Your order has been placed</h2>
                            <div class="col-md-4">
                                <h1>Thank You!</h1>
                            </div>
                            <h2>Your order number is {newOrder.number}</h2>
                            <div className="complete-footer">
                                <div className="container">
                                    <div className="row g-4">
                                        <div className="col-md-12">
                                            <div class="d-grid gap-2">
                                                <button 
                                                onClick={() => navigate('/')}
                                                className="btn btn-secondary btn-lg" 
                                                type="button"
                                                >
                                                    Return To Home Screen
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Complete;