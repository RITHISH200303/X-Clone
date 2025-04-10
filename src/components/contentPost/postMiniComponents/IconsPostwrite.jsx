import { Earth } from 'lucide-react';

export default function IconsPostwrite({ }) {
    return (
        <div className='flex flex-row w-fit rounded-full px-2 hover:bg-[#bde0f765]'>
            <div>
                <Earth className="text-[#1d9bf0] w-3.5 stroke-[4]"/>
            </div>
            <div className='px-1.5'>
                <p className='text-[#1d9bf0] font-bold text-[15px]' role='button'>Every one can reply</p>
            </div>
        </div>
    )
}