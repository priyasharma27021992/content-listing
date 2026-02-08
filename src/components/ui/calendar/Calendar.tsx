'use client';

import Image from 'next/image';
import { Button } from '../button';
import { useState } from 'react';
import { MONTHS_NAME, WEEK } from './utils';
import { RangeDateCalendar } from './RangeDateCalendar';
import { RangeDateType } from './types';

interface CalendarProps {
  date: RangeDateType;
  handleDate: (date: RangeDateType) => void;
  mode?: 'range' | 'date';
}

export const Calendar = ({
  mode = 'date',
  date,
  handleDate,
}: CalendarProps) => {
  const [nowDate, setNowDate] = useState(new Date());
  const currentYear = nowDate.getFullYear();
  const currentMonth = nowDate.getMonth();
  const firstDate = new Date(currentYear, currentMonth, 1);
  const lastDate = new Date(currentYear, currentMonth + 1, 0);
  const firstDay = firstDate.getDay();
  const daysInMonth = lastDate.getDate();

  const handleDateSelect = (selectedDate: number) => {
    const newDate = new Date(currentYear, currentMonth, selectedDate);
    handleDate({ start: newDate });
    console.log('baby', newDate);
  };

  const handleNext = () => {
    setNowDate(new Date(currentYear, currentMonth + 1));
  };

  const handlePrevious = () => {
    setNowDate(new Date(currentYear, currentMonth - 1));
  };

  if (mode === 'range')
    return <RangeDateCalendar date={date} handleDate={handleDate} />;

  return (
    <div className=''>
      <div className='flex justify-between'>
        <p>{MONTHS_NAME[currentMonth]}</p>
        <div>
          <Button onClick={handlePrevious} className='bg-white px-0 py-0'>
            <Image
              src='/images/icons/left-arrow.svg'
              alt='Next Month Button'
              width='20'
              height='20'
            />
          </Button>
          <Button onClick={handleNext} className='ml-2 bg-white px-0 py-0'>
            <Image
              src='/images/icons/right-arrow.svg'
              alt='Next Month Button'
              width='20'
              height='20'
            />
          </Button>
        </div>
      </div>
      <div className='w-100 border p-2'>
        <div className='my-1 grid grid-cols-7 gap-2 rounded-md bg-gray-400'>
          {WEEK.map((we) => (
            <div key={we} className='px-4 py-2'>
              {we}
            </div>
          ))}
        </div>
        <div className='grid grid-cols-7 gap-2'>
          <div
            style={{
              gridColumnStart: firstDay === 0 ? 6 : firstDay - 1,
            }}
          ></div>
          {Array(daysInMonth)
            .fill(0)
            .map((_, day) => (
              <Button
                key={day + 1}
                className='px-1 py-1'
                onClick={() => handleDateSelect(day + 1)}
              >
                {day + 1}
              </Button>
            ))}
        </div>
      </div>
    </div>
  );
};
