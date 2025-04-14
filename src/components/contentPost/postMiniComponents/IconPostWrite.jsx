import { Image, CalendarClock, ListTodo, Smile, MapPin } from 'lucide-react';
import { GifIcon } from '@heroicons/react/24/outline';
import Postbtn from '../../buttons/Postbtn';

export default function IconPostWrite() {
  const logoClasses = "text-[#1d9bf0] w-5";
  const logoContClass = "px-2 py-1.5 rounded-full hover:bg-[#bde0f765] cursor-pointer"

  return (
    <div className='w-full flex flex-row px-1.5 border-solid border-t-[1px] border-gray-300/40 py-2'>
      <div className='w-full flex flex-row py-1 gap-2'>
        <div className={logoContClass}>
          <Image className={logoClasses} />
        </div>
        <div className={logoContClass}>
          <GifIcon className={logoClasses} />
        </div>
        <div className={logoContClass}>
          <ListTodo className={logoClasses} />
        </div>
        <div className={logoContClass}>
          <Smile className={logoClasses} />
        </div>
        <div className={logoContClass}>
          <CalendarClock className={logoClasses} />
        </div>
        <div className={logoContClass}>
          <MapPin className={logoClasses} />
        </div>
      </div>

      <div className="flex flex-row items-center">
        <Postbtn className='py-2 px-5 rounded-full'>Post</Postbtn>
      </div>
    </div>
  );
}
