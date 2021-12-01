import React, {useContext } from 'react';
import { ReactComponent as Logo } from "../icons/food-logo.svg";
import { ReactComponent as EatIn } from "../icons/eat-in.svg";
import { ReactComponent as TakeOut } from "../icons/take-out.svg";
import { Store } from '../context/Store';
import { setOrderType } from '../context/actions/orderTypeActions';
import { useNavigate } from 'react-router-dom';

const DinningChoices = () => {
    let navigate = useNavigate();
    const { dispatch } = useContext(Store);

    const chooseHandler = (orderType) => {
        setOrderType(dispatch, orderType);
        navigate('/order');
    }

    return (
        <div className="dinning-container text-center">
            <div className="dinning-content text-center">
                <div className="container">
                    <Logo />
                    <h2>Where will you be eating today?</h2>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                <EatIn />

                                    <div className="d-grid gap-2">
                                        <button type="button" className="btn btn-secondary btn-lg" onClick={() => chooseHandler('Eat in')}>Eat In<span><i className="bi bi-chevron-right"></i></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <TakeOut />
                                    <div className="d-grid gap-2">
                                        <button type="button" className="btn btn-secondary btn-lg" onClick={() => chooseHandler('Take out')}>Take Out<span><i className="bi bi-chevron-right"></i></span></button>
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

export default DinningChoices;