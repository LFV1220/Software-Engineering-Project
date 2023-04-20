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

function OrderHistory({ orders }) {
    function displayOrders(orders) {
        return (
            <div>
                {orders.map((order, index) => (
                    <MDBCard key={index} className="rounded-3 mb-4">
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
                            <MDBRow></MDBRow>
                            {displayOrderItem(order)}
                        </MDBCardBody>
                    </MDBCard>
                ))}
            </div>
        )
    }

    function displayOrderItem(order) {
        return (
            <div>
                {order.items.map((item, index) => (
                    <div key={index}>
                        <hr />
                        <MDBRow>
                            <MDBCol md="2" lg="2" xl="2">
                                <MDBCardImage className="rounded-3" fluid
                                    src={item.img}
                                    alt={item.title} />
                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3">
                                <p className="lead fw-normal mb-2">{item.title}</p>
                            </MDBCol>
                            <MDBCol></MDBCol>
                            <MDBCol></MDBCol>
                            <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                                <MDBTypography tag="h5" className="mb-0">
                                    ${item.price}
                                </MDBTypography>
                            </MDBCol>
                        </MDBRow>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="order-history bg-image">
            <section className="h-100">
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-start h-100">
                        <MDBCol md="10">
                            <div className="d-flex justify-content-between align-items-start mb-4">
                                <MDBTypography tag="h3" className="fw-normal mb-0 text-white">
                                    Order History
                                </MDBTypography>
                            </div>
                            {displayOrders(orders)}
                            {orders.length == 0
                                ? <div>
                                    <p style={{ color: 'white' }}>No recent orders have been made.</p>
                                </div>
                                : null}
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </div>
    )
}

export default OrderHistory;