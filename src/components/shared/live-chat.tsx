import { Input } from '../ui/input';
import { Smile, SendHorizonal } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import React, { useRef, useState } from 'react';
import { chatsMock } from '@/constants/data';
import { Select, SelectValue, SelectTrigger, SelectContent, SelectGroup, SelectItem } from '../ui/select';

export type HistoryItemProps = {
  name: string;
  time: string;
  message: string;
  avatar: string;
};

const HistoryItem = ({ name, message, avatar, time }: HistoryItemProps) => {

  return (
    <div className="flex items-center gap-1 py-1 px-3">
      <div className="relative">

      </div>
      <div className="flex flex-1 flex-row justify-between bg-transparent rounded-lg px-2 py-1 gap-4">
        <img src='/assets/icons/avatar2.svg' alt='avatar' className='w-10 h-10' />
        <div className='flex flex-col'>
          <div className='flex flex-row items-center justify-start gap-1'>
            <span className="text-sm font-medium text-white">{name ?? "User:"}</span>
            <span className='bg-[#F4D13914] p-1 text-gold rounded-md text-[10px]'>10</span>
          </div>
          <span className="text-xs font-medium text-dark-text"> {message}</span>
        </div>
      </div>
    </div>
  );
};

const LiveChat = () => {
  const [inputStr, setInputStr] = useState('');
  const [emojiIsOpened, setEmojiIsOpened] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleIsOpened = (isOpened: boolean) => {
    setEmojiIsOpened(!isOpened);
  };

  // const onEmojiClick = (emojiObject: EmojiClickData) => {
  //   console.log(emojiObject);
  //   setInputStr((prevInput) => prevInput + emojiObject.emoji);
  // };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="flex max-h-full w-[278px] flex-col items-stretch gap-0 bg-opacity-80">
      <div className="flex flex-1 flex-col items-stretch">
        <div className="relative m-2">
          <div className="flex justify-between items-center gap-3 p-3 bg-dark-gray1 rounded-lg">
            <img src='/assets/image/gold-bg.svg' className='absolute' />
            <img src='/assets/icons/gold.svg' className='absolute top-[30%] left-[10%] z-[10]' />
            <div className='flex flex-row justify-between items-center gap-1 w-full'>
              <div className='flex flex-col z-20 pl-14'>
                <span className='text-white'>
                  30.32
                </span>
                <span className='uppercase text-xs text-gold'>
                  rain pot
                </span>
              </div>
              <div className='flex flex-row items-center justify-between gap-2'>
                <button className='flex flex-row items-center justify-center py-1 px-2 bg-gold border border-gold-light gap-3 rounded-lg'>
                  <span className='text-gold-light'>
                    Join
                  </span>
                </button>
                <button className='flex justify-center py-1 px-2 bg-[#2B313D] rounded-lg'>
                  <span className='text-[#6B7285] text-2xl'>
                    +
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <ScrollArea className={`flex py-3 flex-col items-stretch max-h-[calc(70vh)]`}>
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
      <div className="bg-transparent text-gray-400 px-2 border border-[#20242D] mx-4 rounded-md">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 w-full">
            <Input
              placeholder="Say something..."
              className="!focus:ring-0 !focus:ring-offset-0 !focus:ring min-h-10 resize-none overflow-hidden rounded-none !border-none !bg-transparent p-0 text-gray-400 !outline-none !ring-0 !ring-offset-0 w-full"
              value={inputStr}
              onChange={(e) => {
                setInputStr(e.target.value);
              }}
            />
            <Smile
              className={`cursor-pointer ${emojiIsOpened ? 'text-yellow' : ''}`}
              onClick={() => {
                toggleIsOpened(emojiIsOpened);
              }}
            />
            <SendHorizonal
              className="hover: cursor-pointer text-[#848B8D]"
            />
          </div>

          {/* <div className="flex items-center w-full">
            <EmojiPicker
              height={'300px'}
              width={'100%'}
              theme={Theme.DARK}
              emojiStyle={EmojiStyle.GOOGLE}
              previewConfig={{
                defaultEmoji: '',
                defaultCaption: '',
                showPreview: false
              }}
              skinTonesDisabled={true}
              open={emojiIsOpened}
              onEmojiClick={onEmojiClick}
            />
          </div> */}
        </div>
      </div>
      <div className='flex flex-row items-center justify-center gap-2 m-4'>
        <div className='flex flex-row items-center justify-center gap-1'>
          <button className='flex justify-center py-2 px-2 bg-dark-gray1 rounded-lg'>
            <img src="/assets/icons/twitter.svg" alt='menu' />
          </button>
          <button className='flex justify-center py-2 px-2 bg-dark-gray1 rounded-lg'>
            <img src="/assets/icons/discord.svg" alt='menu' />
          </button>
          <button className='flex justify-center py-2 px-2 bg-dark-gray1 rounded-lg'>
            <img src="/assets/icons/scroll.svg" alt='menu' />
          </button>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="English" className='text-white' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple" className='flex flex-row'>English</SelectItem>
                <SelectItem value="banana">Japanese</SelectItem>
                <SelectItem value="blueberry">Poland</SelectItem>
                <SelectItem value="grapes">Chinese</SelectItem>
                <SelectItem value="pineapple">Vietnamese</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
