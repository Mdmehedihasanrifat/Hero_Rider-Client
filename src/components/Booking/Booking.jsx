import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOut from "./Checkout/checkout";
const stripePromise = loadStripe('pk_test_51IexpBHZx2nFHRt8DUC2tU2bCCYB4Wq0TgxjdZEpmst9BqLpQqv9fGUhKlhP0EapIlcBbPqSPvGrFjql4aF20rDN00bqIsEVmJ');

const Booking = () => {
    const [serviceDetails, setserviceDetails] = useState([]);
    const { serviceId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/selectedservice/${serviceId}`)
            .then(res => res.json())
            .then(data => setserviceDetails(data));
    }, [serviceId])

    return (
        <div>
            <div className="container ">
                <div className="right-order-form text-center">
                    {
                        <div className="d-flex align-items-center justify-content-center my-4 booking-card">
                            <div className="service-icon">
                                <i className={serviceDetails?.img}></i>
                            </div>
                            <div className="service-details text-start">
                                <h1>{serviceDetails.title}</h1>
                                <h5>Price: {serviceDetails.price}$</h5>

                            </div>
                        </div>
                    }
                    {serviceDetails.price && <Elements stripe={stripePromise}>
                        <CheckOut
                            serviceDetails={serviceDetails}
                        />
                    </Elements>}

                </div>

            </div>

        </div>
    );
};

export default Booking;