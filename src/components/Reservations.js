import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import swal from "sweetalert";

function Reservations({ reservations, setReservations }) {
  // const [reservation, setReservation] = useState({});

  //Get one user and verify
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const newReservation = {
        date: formData.get("date"),
        time: formData.get("time"),
        quantity: formData.get("quantity"),
        instructions: formData.get("instructions")
      };
      // setReservation(newReservation);
      setReservations([...reservations, newReservation])
      console.log(reservations)

      //This refresh and show the changes
      //window.location = "/";
      //Alert using the library
      swal({
        title: "SiteBite",
        text: "Your reservation has been scheduled",
        icon: "success",
        button: "Ok"
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="reservations bg-image">
      <div class="tm-black-bg  tm-contact-form-container  ">
        <h1>Schedule Reservation</h1>
        <hr style={{ margin: '15px' }} />
        <form action="" className="reservation-form" id="contact-form" onSubmit={handleSubmit}>

          <div class="tm-form-group">
            <input type="date" name="date" class="tm-form-control" required="" />
          </div>
          <div class="tm-form-group">
            <input type="time" name="time" min="09:00" max="19:00" class="tm-form-control" required="" />
          </div>
          <div class="tm-form-group">
            <input type="number" name="quantity" class="tm-form-control" placeholder="Quantity" required="" />
          </div>
          <div class="tm-form-group tm-mb-30">
            <textarea rows="6" name="instructions" class="tm-form-control" placeholder="Instructions" required=""></textarea>
          </div>
          <div>
            <button type="submit" class="tm-btn-primary tm-align-center">
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>

  )
}

export default Reservations;