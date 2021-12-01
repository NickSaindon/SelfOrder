import React, { useContext } from 'react';
import { ReactComponent as Logo } from "../icons/food-logo.svg";
import { ReactComponent as PayHere } from "../icons/pay-here.svg";
import { ReactComponent as AtCounter } from "../icons/at-counter.svg";
import { Store } from '../context/Store';
import { setPaymentType } from '../context/actions/paymentTypeActions';
import { useNavigate } from 'react-router-dom';

const SelectPayment = () => {
    let navigate = useNavigate();
    const { dispatch } = useContext(Store);

    const selectHandler = (paymentType) => {
        setPaymentType(dispatch, paymentType);
        if (paymentType === 'Pay here') {
            navigate('/payment');
        } else {
            navigate('/complete');
        }
    }

    return (
        <div className="select-payment-container text-center">
            <div className="select-payment-content text-center">
                <div className="container">
                    <Logo />
                    <h2>Select Payment Type</h2>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                <PayHere />
                                    <div class="d-grid gap-2">
                                        <button 
                                        type="button" 
                                        class="btn btn-secondary btn-lg" 
                                        onClick={() => selectHandler('Pay here')}
                                        >
                                            Pay Here
                                            <span>
                                                <i class="bi bi-chevron-right"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <AtCounter />
                                    <div class="d-grid gap-2">
                                        <button 
                                        type="button" 
                                        class="btn btn-secondary btn-lg" 
                                        onClick={() => selectHandler('At counter')}
                                        >
                                            At Counter
                                            <span>
                                                <i class="bi bi-chevron-right"></i>
                                            </span>
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

export default SelectPayment;