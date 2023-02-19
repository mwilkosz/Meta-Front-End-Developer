import React, { useState } from 'react';
import Calendar from 'react-calendar';

function BookingForm({
    date,
    handleDateChange,
    time,
    guests,
    occasion,
    availableTimes,
    availableOcassions,
    onSubmit,
  }) {
    const [formData, setFormData] = useState({
      date,
      time,
      guests,
      occasion,
    });

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Submitting form data:', formData);
      onSubmit(formData);
    };

    const handleFieldChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    return (
      <>
        <div className="flexbox-calendar-table-reserver-section" id="reservations-section">
          <h1>Reservation</h1>
          <Calendar onChange={handleDateChange} value={date} />
        </div>
        <div className="flexbox-details-table-reserver-section">
          <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" name="time" value={formData.time} onChange={handleFieldChange}>
              {availableTimes.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="12" id="guests" name="guests" value={formData.guests} onChange={handleFieldChange} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" value={formData.occasion} onChange={handleFieldChange}>
              {availableOcassions.map((occasion) => (
                <option key={occasion}>{occasion}</option>
              ))}
            </select>
            <input type="submit" value="Make Your reservation" />
          </form>
        </div>
      </>
    );
  }

export default BookingForm;