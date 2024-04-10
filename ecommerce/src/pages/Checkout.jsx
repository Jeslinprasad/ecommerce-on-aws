import React from 'react';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../pages/CheckoutForm';

const Checkout = () => {
    const stripePromise = loadStripe('pk_test_51P0T8YAEdZt2TvfhqH9JMFzqkCw5rpGWEOVmJeKDZE04hkp6OUU7vrBInzThjXCrmxZdNFCyuL6gOTOenlfwkOqP00ci1npsMJ');

    return (
        <section className="checkout-wrapper">
            <AmplifyAuthenticator>
                <Elements stripe={stripePromise}>
                    <section>
                        <h2>Time to Checkout?</h2>
                        <CheckoutForm />
                    </section>
                </Elements>
            </AmplifyAuthenticator>
        </section>
    );
};

export default Checkout;
