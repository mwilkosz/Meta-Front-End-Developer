import React, { useState, useReducer } from 'react';
import BookingForm from './BookingForm';

export function initializeTimes() {
  return ['15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

export function updateTimes(state, action) {
  // Here you can modify the available times based on the selected date
  return initializeTimes();
}

export default function BookingPage() {
  const [date, setDate] = useState(new Date());
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const availableOcassions = ['Birthday', 'Anniversary'];

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

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
      />
    </section>
  );
}


