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

function ReservationHistory({ reservations }) {
    function displayReservations(reservations) {
        return (
            <div style={{ backgroundImage: "url('https://w.forfun.com/fetch/e4/e43c51861269e935ced53777773e8e4c.jpeg')" }}>
                <div>
                    {reservations.map((reservation, index) => (
                        <MDBCard className="rounded-3 mb-4">
                            <MDBCardBody className="p-4">
                                <MDBRow className="justify-content-between align-items-center">
                                    <p className="lead fw-normal mb-2">Date: {reservation.date}</p>
                                </MDBRow>
                                <hr />
                                <MDBRow className="justify-content-between align-items-center">
                                    <p className="lead fw-normal mb-2">Time: {reservation.time}</p>
                                </MDBRow>
                                <hr />
                                <MDBRow className="justify-content-between align-items-center">
                                    <p className="lead fw-normal mb-2">Party size (quantity): {reservation.quantity}</p>
                                </MDBRow>
                                <hr />
                                <MDBRow className="justify-content-between align-items-center">
                                    <p className="lead fw-normal mb-2">Any instruction(s)?</p>
                                    <p className="lead fw-normal mb-2">{reservation.instructions}</p>
                                </MDBRow>
                                <hr />
                                <MDBRow></MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="reservation-history bg-image">
            <section className="h-100">
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-start h-100">
                        <MDBCol md="10">
                            <div className="d-flex justify-content-between align-items-start mb-4">
                                <MDBTypography tag="h3" className="fw-normal mb-0 text-white">
                                    Reservation History
                                </MDBTypography>
                            </div>
                            {displayReservations(reservations)}
                            {reservations.length == 0
                                ? <div>
                                    <p style={{ color: 'white' }}>No reservations have been made.</p>
                                </div>
                                : null}
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </div>
    )
}

export default ReservationHistory;