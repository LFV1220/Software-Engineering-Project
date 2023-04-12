import React from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import { CiSquareRemove } from "react-icons/ci";

export default function Cart({ cart, setCart, orders, setOrders }) {

    function cartItem(cart) {
        return (
            <div>
                {cart.map((cartItem, index) => (
                    <MDBCard className="rounded-3 mb-4">
                        <MDBCardBody className="p-4">
                            <MDBRow className="justify-content-between align-items-center">
                                <MDBCol md="2" lg="2" xl="2">
                                    <MDBCardImage className="rounded-3" fluid
                                        src={cartItem.img}
                                        alt={cartItem.title} />
                                </MDBCol>
                                <MDBCol md="3" lg="3" xl="3">
                                    <p className="lead fw-normal mb-2">{cartItem.title}</p>
                                </MDBCol>
                                <MDBCol md="3" lg="3" xl="2"
                                    className="d-flex align-items-center justify-content-around">
                                </MDBCol>
                                <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                                    <MDBTypography tag="h5" className="mb-0">
                                        ${cartItem.price}
                                    </MDBTypography>
                                </MDBCol>
                                <MDBCol md="1" lg="1" xl="1" className="text-end">
                                    <button onClick={() => removeFromCart(index)}>
                                        <CiSquareRemove />
                                    </button>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                ))}
            </div>
        )
    }

    // removes menu item from cart
    function removeFromCart(index) {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
        console.log(newCart);
    }

    function handleCheckout() {
        const order = {
            id: orders.length + 1, // unique id for each order
            items: cart, // array of items in the order
            totalPrice: cart.reduce((acc, item) => acc + item.price, 0), // total price of the order
            date: new Date().toLocaleString(), // date and time the order was placed
        };

        setOrders([...orders, order]);
        setCart([]); // clear the cart
        alert("Order placed successfully!");
        console.log(JSON.stringify(orders));
    }

    return (
        <section className="h-100" style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol md="10">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                                Shopping Cart
                            </MDBTypography>
                        </div>
                        {cartItem(cart)}
                        {cart.length > 0
                            ? <div>
                                <MDBCard className="mb-4">
                                    <MDBCardBody className="p-4 d-flex flex-row">
                                        <MDBInput label="Anything you want us to know about your order?" wrapperClass="flex-fill" size="lg" />
                                    </MDBCardBody>
                                </MDBCard>

                                <MDBCard>
                                    <MDBCardBody>
                                        <MDBBtn className="ms-3" color="warning" block size="lg" onClick={handleCheckout}>
                                            Checkout
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </div>
                            : <p>Cart is empty</p>}
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}