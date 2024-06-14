import { ScrollArea } from '../ui/scroll-area';
import React, { useRef } from 'react';
import { chatsMock } from '@/constants/data';

export type HistoryItemProps = {
  name: string;
  time: string;
  message: string;
  avatar: string;
};

const HistoryItem = ({ name, message, avatar, time }: HistoryItemProps) => {

  return (
    <div className="flex items-center gap-1 py-1 px-3">
      <div className="flex flex-1 flex-row items-center bg-dark-gray2 rounded-lg px-3 py-4 gap-4 relative">
        <img src='/assets/icons/weapon.svg' alt='avatar' className='w-10 h-10' />
        <img src='/assets/icons/polygon.svg' alt='avatar' className='absolute top-2 right-2 w-5 h-5' />
        <div className='flex flex-col'>
          <div className='flex flex-col'>
            <span className='text-white'>
              Basic Gun
            </span>
            <div className='flex flex-row items-center justify-center gap-1'>
              <img src='/assets/icons/gold.svg' alt='avatar' className='w-5 h-5' />
              <span className='text-white'>
                0.40
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WeaponLists = () => {
  const ref = useRef<HTMLDivElement>(null);

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="flex max-h-full w-2/12 flex-col items-stretch gap-0 bg-opacity-80">
      <div className="flex flex-1 flex-col items-stretch">
        <div className="relative m-2">
          <div className="flex justify-center items-center gap-3 p-3 bg-dark-gray2 rounded-lg w-full">
            <button className='text-gold bg-[#F4D13914] py-3 rounded-md w-full'>
              Top Loot
            </button>
            <button className='text-[#39404E] w-full py-3'>
              All Loot
            </button>
          </div>
        </div>
        <div className='p-2 flex justify-around items-center bg-dark-gray2 mx-2 rounded-md'>
          <div className='flex flex-row items-center justify-center gap-2'>
            <img src='/assets/icons/upgrade.svg' className='w-5 h-5' />
            <span className='text-gold capitalize'>upgrader</span>
          </div>
          <div className='flex flex-row items-center justify-center gap-2'>
            <img src='/assets/icons/gold.svg' className='w-5 h-5' />
            <span className='text-white'>26.45</span>
          </div>
        </div>
        <ScrollArea className={`flex py-3 flex-col items-stretch max-h-[calc(78vh)]`}>
          {chatsMock.map((chat, key) => (
            <React.Fragment key={key}>
              <HistoryItem
                name={chat.name}
                avatar={chat.avatar}
                time={formatTime(chat.time)}
                message={chat.message}
              />
              <div ref={ref}></div>
            </React.Fragment>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
};

export default WeaponLists;
