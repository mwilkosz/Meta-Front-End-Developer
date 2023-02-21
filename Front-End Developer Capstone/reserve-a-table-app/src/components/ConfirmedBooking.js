import React from 'react';
import { useNavigate } from 'react-router-dom';

import mario_and_adrian from  "../images/mario_and_adrian.PNG"

function ConfirmedBooking() {
  const navigate = useNavigate();

  return (
    <section>
      <div>
        <h2>Booking Confirmed!</h2>
        <p>Thank you for your reservation. We look forward to seeing you!</p>
      </div>
      <div>
        <img class="img-2-about-section" src={mario_and_adrian} alt="Little Lemon Restaurant food" style={{width: 400, height: 450, verticalAlign:"middle"}}></img>
        <button onClick={(event) => navigate('/')}>Home</button>
      </div>
    </section>
  );
}

export default ConfirmedBooking;