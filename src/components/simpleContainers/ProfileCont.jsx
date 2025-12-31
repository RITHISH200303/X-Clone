import { Ellipsis } from 'lucide-react';

export default function ProfileCont({iconDisplay}) {
    return (
      <div className="w-full p-2 my-4 flex flex-row justify-between items-center rounded-full hover:bg-gray-200 active:bg-gray-400/40">
        
        <div className="w-[42px] aspect-square shrink-0 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://i.pinimg.com/736x/76/5b/bc/765bbc893a035f5517d151a411f5df72.jpg"
            alt=""
          />
        </div>
        { 
        !iconDisplay ? (
        <>
        <div className="flex flex-col text-sm mx-2 overflow-hidden">
          <span className="font-bold truncate">Mahatma Gandhi</span>
          <span className="truncate">@mahatmagandhi</span>
        </div>

        <div className="shrink-0">
          <Ellipsis />
        </div>
        </> 
        )
        :
        null
        }
      </div>
    );
  }
  