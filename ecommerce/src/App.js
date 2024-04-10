import React, { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import awsExports from './aws-exports';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '@aws-amplify/ui-react/styles.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import Product from "./pages/Product";
import Login from "./pages/Login";
import { listOrders } from "./graphql/queries";

Amplify.configure(awsExports);

function App() {
  /**const {orders, setOrders} = useState([]);
  useEffect(() =>{

    fetchOrders()

  }, []);
  const fetchOrders = async () => {
    try {
      const orderData = await API.graphql(graphqlOperations(listOrders))
      const orderList = orderData.data.listOrders.items;
      console.log('order list', orderList);
      setOrders(orderList)

    } catch (error) {
      console.log('error on fetching orders', error);
    }
  }**/
  return (
    <Authenticator loginMechanisms={['email']} >
      {({ signOut, user }) => (
        
        <Router>
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          
          
          <React.Suspense fallback={<Loader />}>
          <NavBar logout={signOut} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </React.Suspense>
          <Footer />
        </Router>
      )}
    </Authenticator>
  );
}

export default App;
