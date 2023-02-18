import React, { useState } from 'react';
import BookingForm from './BookingForm';

export default function BookingPage() {
  const [date, setDate] = useState(new Date());
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const availableTimes = ['15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const availableOcassions = ['Birthday', 'Anniversary']

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setGuests(parseInt(event.target.value));
  };

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  return (
    <section className="flexbox-reserver-section">
      <BookingForm
        date={date}
        setDate={setDate}
        time={selectedTime}
        handleTimeChange={handleTimeChange}
        guests={guests}
        handleGuestsChange={handleGuestsChange}
        occasion={occasion}
        handleOccasionChange={handleOccasionChange}
        availableTimes={availableTimes}
        availableOcassions={availableOcassions}
      />
    </section>
  );
}