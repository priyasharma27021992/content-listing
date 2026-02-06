'use client';
import { useState } from 'react';
import { CalendarPopover } from '../calendar-popover/CalendarPopover';

const MainSearch = () => {
  const [travelDate, setTravelDate] = useState(new Date());
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className='w-full'>
      <h1>Save upto 40% on your next hotel stay</h1>
      <h2>We compare hotel prices from over 100 sites</h2>

      <form className='flex flex-row shadow-md' onSubmit={handleSubmit}>
        <fieldset className='basis-2/5 border-2'>
          <legend>Hotel</legend>
          <input />
        </fieldset>
        <fieldset className='basis-2/5 border-2'>
          <legend>Date</legend>
          <CalendarPopover
            date={travelDate.toDateString()}
            handleDate={setTravelDate}
          />
        </fieldset>
        <fieldset className='basis-2/5 border-2'>
          <legend>Guest</legend>
          <input />
        </fieldset>
        <button type='submit' className='basis-1/5 border'>
          Submit
        </button>
      </form>
    </section>
  );
};

export { MainSearch };
