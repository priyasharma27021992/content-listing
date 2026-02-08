'use client';
import { FormEvent, useState } from 'react';
import { CalendarPopover } from '../calendar-popover/CalendarPopover';
import { RangeDateType } from '../ui/calendar/types';

const MainSearch = () => {
  const now = new Date();
  const [travelDate, setTravelDate] = useState<RangeDateType>({
    start: now,
    end:
      now.getFullYear() === 11
        ? new Date(now.getFullYear() + 1, 1, 0)
        : new Date(now.getFullYear(), now.getMonth() + 1, 1),
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleTravelDate = (date: RangeDateType) => {
    setTravelDate({
      start: date.start,
      end: date.end,
    });
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
          <CalendarPopover date={travelDate} handleDate={handleTravelDate} />
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
