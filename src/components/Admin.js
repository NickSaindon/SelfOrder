import React from 'react';

const Admin = () => {

    return (
        <div className="admin-container text-center">
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Order #</th>
                            <th scope="col">Price&nbsp;($)</th>
                            <th scope="col">Items</th>
                            <th scope="col">Type</th>
                            <th scope="col">Payment</th>
                            <th scope="col">State</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>6.99</td>
                            <td>1</td>
                            <td>Coca-Cola x 6</td>
                            <td>Eat in</td>
                            <td>At counter</td>
                            <td>Ready</td>
                            <td>
                                <div className="container">
                                    <div className="row g-2">
                                        <div className="col-md-4">
                                            <div className="d-grid gap-2">
                                                <button type="button" className="btn btn-success">Ready</button>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                        <div className="d-grid gap-2">

                                            <button type="button" className="btn btn-danger">Cancel</button>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                        <div className="d-grid gap-2">

                                            <button type="button" className="btn btn-primary">Deliver</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Admin;