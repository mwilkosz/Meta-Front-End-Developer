import React from 'react';
import { useNavigate } from 'react-router-dom';

function ConfirmedBooking() {
  const navigate = useNavigate();

  return (
    <section className="confirmed-booking">
      <div>
        <h2>Booking Confirmed!</h2>
        <p>Thank you for your reservation. We look forward to seeing you!</p>
        <button onClick={(event) => navigate('/')}>Home</button>
      </div>
    </section>
  );
}

export default ConfirmedBooking;