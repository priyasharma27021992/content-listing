'use client';
import { Popover, PopoverContent, PopoverTrigger } from '../ui';
import { Calendar } from '../ui/calendar/Calendar';
import { RangeDateType } from '../ui/calendar/types';

interface CalendarPopoverProps {
  date: RangeDateType;
  handleDate: (date: RangeDateType) => void;
  mode?: 'range' | 'date';
}

export const CalendarPopover = ({ date, handleDate }: CalendarPopoverProps) => {
  return (
    <Popover className='relative'>
      <PopoverTrigger className=''>
        {date.start.toDateString()}{' '}
        {date?.end && <span>to {date.end.toDateString()}</span>}
      </PopoverTrigger>
      <PopoverContent className='absolute inset-0 z-2 my-1 rounded-md bg-gray-300 p-2'>
        <Calendar date={date} handleDate={handleDate} mode='range' />
      </PopoverContent>
    </Popover>
  );
};
