import React from 'react';
import { addToOrder, removeFromOrder } from '../context/actions/orderItemActions';

const OrderModal = ({product, dispatch, setQuantity, quantity, orderItems}) => {

    return (
        <div 
            className="modal fade" 
            id="quantityModal" 
            tabIndex="-1" 
            aria-labelledby="exampleModalLabel" 
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add {product.name}</h5>
                    </div>
                    <div className="modal-body">
                        <div className="row justify-content-md-center">
                            <div className="col col-lg-2">
                                <button 
                                    type="button" 
                                    className="btn btn-primary"
                                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                                    disabled={quantity === 1}
                                >
                                    <i className="bi bi-dash-lg"></i>
                                </button>
                            </div>
                            <div className="col-md-auto">
                                <input type="number" className="form-control" min="1" onChange={e => e.target.value } value={quantity} />
                            </div>
                            <div className="col col-lg-2">
                                <button 
                                    type="button" 
                                    className="btn btn-primary"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    <i className="bi bi-plus-lg"></i>
                                </button>
                            </div>
                        </div>                        
                    </div>
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="d-grid gap-2">
                                    <button 
                                    onClick={() => {removeFromOrder(dispatch, product)}}
                                    type="button"
                                    className="btn btn-secondary btn-lg" 
                                    data-bs-dismiss="modal"
                                    >
                                        {orderItems.find((x) => x.name === product.name)
                                        ? 'Remove From Order' : 'Cancel'}
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-grid gap-2">
                                    <button 
                                        onClick={() => {addToOrder(dispatch, { ...product, quantity })}}
                                        data-bs-dismiss="modal"
                                        type="button" 
                                        className="btn btn-secondary btn-lg"
                                    >
                                        Add to Order
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

export default OrderModal;