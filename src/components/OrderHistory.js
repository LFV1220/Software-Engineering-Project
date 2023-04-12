import React from 'react';
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

function OrderHistory({ orders, setOrders }) {
    function displayOrders(orders) {
        return (
            <div>
                {orders.map((order, index) => (
                    <MDBCard className="rounded-3 mb-4">
                        <MDBCardBody className="p-4">
                            <MDBRow className="justify-content-between align-items-center">
                                <MDBCol md="3" lg="3" xl="3">
                                    <p className="lead fw-normal mb-2">Order #{order.id}: </p>
                                </MDBCol>
                                <MDBCol md="3" lg="3" xl="3">
                                    <p className="lead fw-normal mb-2">{order.date}</p>
                                </MDBCol>
                                <MDBCol md="3" lg="3" xl="3">
                                    <p className="lead fw-normal mb-2">Total Price: ${order.totalPrice}</p>
                                </MDBCol>
                            </MDBRow>
                            {/* TODO: DISPLAY EACH ORDER ITEM */}
                            {/* {orders.items.map((orderItem, index) => (
                                <p>{orderItem.title}</p>
                            ))} */}
                            <MDBRow className="justify-content-between align-items-center">

                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                ))}
            </div>
        )
    }

    function displayOrderItem() {

    }

    return (
        <section className="h-100" style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol md="10">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                                Order History
                            </MDBTypography>
                        </div>
                        {displayOrders(orders)}
                        {orders.length == 0
                            ? <div>
                                <p>No recent orders have been made.</p>
                            </div>
                            : null}
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    )
}

export default OrderHistory;