import React, { useState, useReducer } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from './temp.js'
import { useNavigate } from 'react-router-dom';

export function initializeTimes() {
  const today = new Date();
  const availableTimes = fetchAPI(today);
  return availableTimes;
}

export function updateTimes(state, action) {
  const selectedDate = action;
  const availableTimes = fetchAPI(selectedDate);
  return availableTimes;
}

export default function BookingPage() {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const availableOcassions = ['Birthday', 'Anniversary'];

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  
  const defaultTime = availableTimes[0];
  const defaultGuests = 1;
  const defaultOccasion = availableOcassions[0];

  function submitForm(formData) {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmed-booking');
    }
  }

  const handleDateChange = (date) => {
    setDate(date);
    dispatch(date);
  };

  return (
    <section className="flexbox-reserver-section">
      <BookingForm
        date={date}
        handleDateChange={handleDateChange}
        availableTimes={availableTimes}
        availableOcassions={availableOcassions}
        onSubmit={submitForm}
        defaultTime={defaultTime}
        defaultGuests={defaultGuests}
        defaultOccasion={defaultOccasion}
      />
    </section>
  );
}