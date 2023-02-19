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
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const navigate = useNavigate();

  const availableOcassions = ['Birthday', 'Anniversary'];

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  function submitForm(formData) {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmed-booking');
    }
  }

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setGuests(parseInt(event.target.value));
  };

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  const handleDateChange = (date) => {
    setDate(date);
    dispatch(date);
  };

  return (
    <section className="flexbox-reserver-section">
      <BookingForm
        date={date}
        handleDateChange={handleDateChange}
        time={selectedTime}
        handleTimeChange={handleTimeChange}
        guests={guests}
        handleGuestsChange={handleGuestsChange}
        occasion={occasion}
        handleOccasionChange={handleOccasionChange}
        availableTimes={availableTimes}
        availableOcassions={availableOcassions}
        dispatch={dispatch}
        onSubmit={submitForm}
      />
    </section>
  );
}