import React, { useContext, useEffect } from 'react';
import { ReactComponent as Logo } from "../icons/food-logo.svg";
import { Store } from '../context/Store';
import { listQueue } from '../context/actions/queueActions';

const Queue = () => {
    const { state, dispatch } = useContext(Store);
    const { queue, loading, error } = state.queueList;

    useEffect(() => {
        listQueue(dispatch);
    }, [dispatch]);

    return (
        <div className="queue-container text-center">
                <div className="container">
                    <Logo />
                    <h1>Queue</h1>
                    <div className="row">
                        {loading ? (
                            <div className="text-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : error ? (
                            <div className="alert alert-danger" role="alert">
                                { error }
                            </div>
                        ) : (
                            <>
                                <div className="col-md-6">
                                    <h2>In Progress</h2>
                                    <ul className="list-group">
                                        {queue.inProgressOrders.map((order) => (
                                            <li className="list-group-item" key={order.number}>
                                                <h2>{order.number}</h2>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h2>Now Serving</h2>
                                    <ul className="list-group">
                                        {queue.servingOrders.map((order) => (
                                            <li className="list-group-item" key={order.number}>
                                                <h2>{order.number}</h2>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        )}
                </div>
            </div>
        </div>
    );
}

export default Queue;