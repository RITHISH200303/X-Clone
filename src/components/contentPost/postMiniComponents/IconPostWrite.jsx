import {Image, CalendarClock, ListTodo, Smile, MapPin} from 'lucide-react';
import { GifIcon } from '@heroicons/react/24/outline';
import Postbtn from '../../buttons/Postbtn';

export default function IconPostWrite({ }) {
    const logoClasses = "text-[#1d9bf0] w-5 mr-4"
    return (
        <div className='w-full flex flex-row px-1.5 border-solid border-t-[1px] border-gray-300/40 py-2'>
            <div className='w-full flex flex-row py-3'>
                <Image className={logoClasses}/>
                <GifIcon className={logoClasses}/>
                <ListTodo className={logoClasses}/>
                <Smile className={logoClasses}/>
                <CalendarClock className={logoClasses}/>
                <MapPin className={logoClasses}/>
            </div>
            <div className="flex flex-row items-center ">
                <Postbtn className='py-2 px-5 rounded-full'>Post</Postbtn>
            </div>
            {/* <div className='px-1.5'>
                <p className='text-[#1d9bf0] font-bold text-[15px]' role='button'>Every one can reply</p>
            </div> */}
        </div>
    )
}