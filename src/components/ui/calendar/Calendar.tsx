'use client';

import { useEffect, useRef } from 'react';
import { Button } from '../button';

const MONTHS_NAME = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

interface CalendarProps {
  mode?: 'date' | 'range';
}

export const Calendar = ({
  mode = 'date',
  date,
  handleDate,
}: CalendarProps) => {
  const ref = useRef(null);
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const handleDateSelect = (selectedDate: number) => {
    const newDate = new Date(currentYear, currentMonth, selectedDate);
    handleDate(newDate);
    console.log('baby', newDate);
  };

  useEffect(() => {
    if (!ref.current) return;
  }, []);

  return (
    <div className='' ref={ref}>
      <p>{MONTHS_NAME[currentMonth]}</p>
      <div className='grid w-100 grid-cols-7 gap-2 border p-2'>
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
  );
};
