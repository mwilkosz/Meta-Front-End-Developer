import React from 'react';
import Calendar from 'react-calendar';

function BookingForm({ date, handleDateChange, time, handleTimeChange, guests, handleGuestsChange, occasion, handleOccasionChange, availableTimes, availableOcassions}) {
    return (
        <>
            <div className="flexbox-calendar-table-reserver-section" id="reservations-section">
                <h1>Reservation</h1>
                <Calendar onChange={handleDateChange} value={date} />
            </div>
            <div className="flexbox-details-table-reserver-section">
                <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
                    <label forHtml="res-time">Choose time</label>
                        <select id="res-time" value={time} onChange={handleTimeChange}>
                            {availableTimes.map((time) => (
                                <option key={time}>{time}</option>
                            ))}
                        </select>
                    <label forHtml="guests">Number of guests</label>
                        <input type="number" placeholder="1" min="1" max="12" id="guests" value={guests} onChange={handleGuestsChange} />
                    <label forHtml="occasion">Occasion</label>
                        <select id ="occasion" value={occasion} onChange={handleOccasionChange}>
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