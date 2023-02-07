
import React, { useState } from 'react';
import Calendar from 'react-calendar';

export default function TableReserverSection() {
    const [date, setDate] = useState(new Date());

    return (
      <section class="flexbox-table-reserver-section">
        <div class="flexbox-calendar-table-reserver-section">
          <Calendar onChange={setDate} value={date} />
        </div>
        <div class="flexbox-details-table-reserver-section">
          <p className='text-center'>
            <span className='bold'>Selected Date:</span>{' '}
            {date.toDateString()}
          </p>
        </div>
      </section>
    )
  }