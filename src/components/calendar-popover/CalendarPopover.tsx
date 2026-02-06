'use client';
import { useRef, useState } from 'react';
import { Button, Popover, PopoverContent, PopoverTrigger } from '../ui';
import { Calendar } from '../ui/calendar/Calendar';

export const CalendarPopover = ({ date, handleDate }) => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef(null);
  const toggle = () => {
    console.log('baby here');
    setOpen((prev) => {
      return !prev;
    });
  };
  return (
    <Popover className='relative'>
      <PopoverTrigger className=''>
        <Button className='' onClick={toggle}>
          {date}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        open={open}
        handleClose={toggle}
        ref={ref}
        className='absolute z-2 my-1 rounded-md bg-gray-300 p-2'
      >
        <Calendar date={date} handleDate={handleDate} />
      </PopoverContent>
    </Popover>
  );
};
