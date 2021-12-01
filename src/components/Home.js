import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from "../icons/food-logo.svg";

const Home = () => {
    let navigate = useNavigate();

    return (
        <div className="home-container" onClick={() => navigate('/dinning-choices')}>
            <div className="home-content text-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4">
                            <h1>order</h1>
                            <h1><span>&</span> pay</h1>
                            <h1>here</h1>
                            <h3>Fast <span>&</span> Easy!</h3>
                            <i className="bi bi-hand-index-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-1">
                        <Logo />

                        </div>
                        <div className="col-lg-3">
                            <h3>TOUCH TO START</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;