'use client';
import { useState } from 'react';
import { Button, Popover, PopoverContent, PopoverTrigger } from '../ui';
import { Calendar } from '../ui/calendar/Calendar';

export const CalendarPopover = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div>
      <Popover className='relative'>
        <PopoverTrigger className=''>
          <Button onClick={toggle}>Enter Date</Button>
        </PopoverTrigger>
        <PopoverContent open={open} className='absolute top-[50%]'>
          <Calendar />
        </PopoverContent>
      </Popover>
    </div>
  );
};
