import { Button } from '../button';
import Image from 'next/image';
import { MONTHS_NAME, WEEK } from './utils';
import { useMemo, useState } from 'react';
import { RangeDateType } from './types';

interface RangeDateCalendarProps {
  date: RangeDateType;
  handleDate: (date: RangeDateType) => void;
}

export const RangeDateCalendar = ({
  date,
  handleDate,
}: RangeDateCalendarProps) => {
  const now = new Date();
  const [nowDate, setNowDate] = useState({
    start: now,
    end:
      now.getMonth() === 11
        ? new Date(now.getFullYear() + 1, 0, 1)
        : new Date(now.getFullYear(), now.getMonth() + 1, 1),
  });

  const getDays = (date: Date) => {
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    const firstDate = new Date(currentYear, currentMonth, 1);
    const lastDate = new Date(currentYear, currentMonth + 1, 0);
    const firstDay = firstDate.getDay();
    const daysInMonth = lastDate.getDate();
    return { currentYear, firstDay, daysInMonth, month: currentMonth };
  };

  const dateRanges = useMemo(() => {
    const start = getDays(nowDate.start);
    const end = getDays(nowDate.end);
    return { start, end };
  }, [nowDate]);

  const handleStartDateSelect = (selectedDate: number) => {
    const newDate = new Date(
      dateRanges.start.currentYear,
      dateRanges.start.month,
      selectedDate,
    );
    handleDate({ ...date, start: newDate });
  };

  const handleEndDateSelect = (selectedDate: number) => {
    const newDate = new Date(
      dateRanges.end.currentYear,
      dateRanges.end.month,
      selectedDate,
    );
    handleDate({ ...date, end: newDate });
  };

  const handleNext = () => {
    setNowDate((prev) => ({
      start: new Date(prev.start.getFullYear(), prev.start.getMonth() + 1, 1),
      end:
        prev.end.getMonth() === 11
          ? new Date(prev.end.getFullYear() + 1, 0, 1)
          : new Date(prev.end.getFullYear(), prev.end.getMonth() + 1, 1),
    }));
  };

  const handlePrevious = () => {
    setNowDate((prev) => ({
      start:
        prev.start.getMonth() === 0
          ? new Date(prev.start.getFullYear() - 1, 0, 1)
          : new Date(prev.start.getFullYear(), prev.start.getMonth() - 1, 1),
      end: new Date(prev.end.getFullYear(), prev.end.getMonth() - 1, 1),
    }));
  };
  return (
    <div className='flex gap-5'>
      {/* Start From */}
      <div className='bg-amber-50'>
        <div className='flex justify-between'>
          <p>{MONTHS_NAME[dateRanges.start.month]}</p>
          <Button onClick={handlePrevious} className='bg-white px-0 py-0'>
            <Image
              src='/images/icons/left-arrow.svg'
              alt='Next Month Button'
              width='20'
              height='20'
            />
          </Button>
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
                gridColumnStart:
                  dateRanges.start.firstDay === 0
                    ? 6
                    : dateRanges.start.firstDay - 1,
              }}
            ></div>
            {Array(dateRanges.start.daysInMonth)
              .fill(0)
              .map((_, day) => (
                <Button
                  key={day + 1}
                  className='px-1 py-1'
                  onClick={() => handleStartDateSelect(day + 1)}
                >
                  {day + 1}
                </Button>
              ))}
          </div>
        </div>
      </div>
      {/* End To */}
      <div className='bg-amber-50'>
        <div className='flex justify-between'>
          <p>{MONTHS_NAME[dateRanges.end.month]}</p>
          <div>
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
                gridColumnStart:
                  dateRanges.end.firstDay === 0
                    ? 6
                    : dateRanges.end.firstDay - 1,
              }}
            ></div>
            {Array(dateRanges.end.daysInMonth)
              .fill(0)
              .map((_, day) => (
                <Button
                  key={day + 1}
                  className='px-1 py-1'
                  onClick={() => handleEndDateSelect(day + 1)}
                >
                  {day + 1}
                </Button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
