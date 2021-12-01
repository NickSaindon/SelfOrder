import React, { useEffect, useContext, useState } from 'react';
import { listCategories } from '../context/actions/categoriesActions';
import { listProducts } from '../context/actions/productActions';
import { clearOrder } from '../context/actions/orderItemActions';
import { Store } from '../context/Store';
import { ReactComponent as Logo } from "../icons/food-logo.svg";
import { useNavigate } from 'react-router-dom';
import OrderModal from './OrderModal';

const Order = () => {
    let navigate = useNavigate();
    const { state, dispatch } = useContext(Store);
    const { categories, loading, error } = state.categoryList;
    const { products, loading: loadingProducts, error: errorProducts } = state.productList;
    const { orderItems, itemsCount, taxPrice, totalPrice, orderType } = state.order;
    const [categoryName, setCategoryName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(Object);

    const productClickHandler = (p) => {
        setProduct(p);
    };

    useEffect(() => { 
        if (!categories) {
            listCategories(dispatch);
        } else {
            listProducts(dispatch, categoryName);
        }

    }, [dispatch, categories, categoryName]);

    const categoryClickHandler = (name) => {
        setCategoryName(name);
        listProducts(dispatch, categoryName);
    };

    return (
        <div className="order-container">
            <OrderModal 
              product={product}
              dispatch={dispatch} 
              setQuantity={setQuantity} 
              quantity={quantity} 
              orderItems={orderItems} 
            />
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="select-category">
                            <ul className="list-group">
                                {loading ? (
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                ) : error ? (
                                    <div className="alert alert-danger" role="alert">
                                        { error }
                                    </div>
                                ) : (
                                    <>
                                        <li className="list-group-item">
                                            <button type="button" className="btn btn-link" onClick={() => categoryClickHandler('')}>
                                                <Logo />
                                            </button>
                                        </li>
                                        {categories.map((category) => (
                                            <li className="list-group-item" key={category.name}>
                                                <button type="button" className="btn btn-link" onClick={() => categoryClickHandler(category.name)}>
                                                    <img alt={category.name} src={category.image} />
                                                </button>
                                            </li>
                                        ))}
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-10 menu-container">
                        <h1>{categoryName || 'Main Menu'}</h1>
                        <div>
                            {loadingProducts ? (
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            ) : errorProducts ? (
                                <div className="alert alert-danger" role="alert">
                                    { error }
                                </div>
                            ) : (
                                <div className="container">
                                    <div className="row g-4">
                                        {products.map((product) => (
                                            <div className="col-md-6" key={product.name}>
                                                <div 
                                                    className="card"
                                                    data-bs-toggle="modal" 
                                                    data-bs-target="#quantityModal"
                                                    onClick={() => productClickHandler(product)}
                                                >
                                                    <div className="card-body text-center">
                                                        <img alt={product.name} src={product.image} />
                                                    </div>
                                                    <div className="product-footer">
                                                        <h5>{product.name}</h5>
                                                        <p className="text-muted">{product.calorie} Cal</p>
                                                        <p>${product.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>            
                    </div>
                    <div className="order-footer">
                        <div className="container">
                            <div className="alert alert-primary order-tracker" role="alert">
                                My Order - {orderType} | Tax: ${taxPrice} | Total: ${totalPrice} | Items: {itemsCount}
                            </div>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="d-grid gap-2">
                                        <button 
                                            onClick={() => {
                                            clearOrder(dispatch);
                                            navigate('/');
                                            }}
                                            className="btn btn-secondary btn-lg" 
                                            type="button"
                                        >
                                            Cancel Order
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-grid gap-2">

                                        <button 
                                            onClick={() => navigate('/review')}
                                            className="btn btn-secondary btn-lg" 
                                            type="button"
                                        >
                                            Done
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

export default Order;