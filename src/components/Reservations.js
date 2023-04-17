import React, { useState } from "react";
//import '../styleres.css';
import { Container } from 'react-bootstrap';
import swal from "sweetalert";

function Reservations({ isSignedIn }) {
  const [reservation, setReservation] = useState({
    date: "",
    quantity: "",
  });

  /*=============================================
    =            FUNCTIONS            =
    =============================================*/
    
    //Get one user and verify
    const handleSubmit = async e => {
      e.preventDefault();
      try {
  
        //This refresh and show the changes
        //window.location = "/";
        //Alert using the library
        swal({
          title: "SiteBite says",
          text:  "You have a reservation",
          icon: "success",
          button: "Ok"
        });
      } catch (err) {
        console.error(err.message);
      }
    };

    return (
        //<div className='formInput'>
         //   <p>Test (from RESERVATIONS component) {isSignedIn}</p>
        //</div>
        <div style={{ backgroundImage: "url('https://w.forfun.com/fetch/e4/e43c51861269e935ced53777773e8e4c.jpeg')"}}>
        <div class="tm-black-bg  tm-contact-form-container  ">
          <form action="" id="contact-form"  onSubmit={handleSubmit}>
            
            <div class="tm-form-group">
            <input type="date" name="name" class="tm-form-control" required="" />
            </div>
            <div class="tm-form-group">
            <input type="time" name="name" min="09:00" max="19:00" class="tm-form-control" required="" />
            </div>
            <div class="tm-form-group">
            <input type="number" name="number" class="tm-form-control" placeholder="Quatity" required="" />
            </div>       
            <div class="tm-form-group">
            <input type="email" name="email" class="tm-form-control" placeholder="Email" required="" />
            </div>   
            <div class="tm-form-group tm-mb-30">
            <textarea rows="6" name="instructions" class="tm-form-control" placeholder="Instructions" required=""></textarea>
            </div>        
            <div>
            <button type="submit" class="tm-btn-primary tm-align-right">
                Submit
            </button>
            </div>
            
          </form>
        </div>
        </div>
        
    )
}

export default Reservations;