import React, { useState } from 'react';
import Calendar from 'react-calendar';

export default function BookingForm({
  date,
  handleDateChange,
  defaultTime,
  availableTimes,
  defaultGuests,
  defaultOccasion,
  availableOcassions,
  onSubmit,
}) {
  const [formData, setFormData] = useState({
    date,
    name: '',
    time: defaultTime,
    guests: defaultGuests,
    occasion: defaultOccasion,
    phone: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.checkValidity()) {
      console.log('Submitting form data:', formData);
      onSubmit(formData);
    }
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(name, value)
  };

  return (
    <>
      <div className="flexbox-calendar-booking-form" id="reservations-section">
        <h1>Reservation</h1>
        <Calendar onChange={handleDateChange} value={date} />
      </div>
      <div className="flexbox-details-booking-form">
        <form className="grid-details-booking-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleFieldChange} required />
          <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleFieldChange} required />
          <label htmlFor="res-time">Choose time</label>
            <select id="res-time" name="time" value={formData.time} onChange={handleFieldChange} required>
              {availableTimes.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
          <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="12" id="guests" name="guests" value={formData.guests} onChange={handleFieldChange} required />
          <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" value={formData.occasion} onChange={handleFieldChange} required>
              <option value="" disabled hidden>Select an occasion</option>
              {availableOcassions.map((occasion) => (
                <option key={occasion}>{occasion}</option>
              ))}
            </select>
          <input type="submit" value="Make Your reservation" disabled={!formData.name | !formData.phone} />
        </form>
      </div>
    </>
  );
}
