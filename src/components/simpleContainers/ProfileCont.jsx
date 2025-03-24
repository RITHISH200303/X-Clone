import { Ellipsis } from 'lucide-react';

export default function ProfileCont({ }) {
    return (
        <div className="p-2 my-4 flex flex-row justify-between items-center rounded-full hover:bg-gray-200 active:bg-gray-400/40">
            <div className="w-1/5 aspect-square rounded-full overflow-hidden"><img className="w-full rounded-full h-auto object-cover" src="https://img.freepik.com/free-photo/closeup-view-calm-young-lady-street_74855-4995.jpg" alt="" /></div>
            <div className="flex flex-col">
                <span>Kumbi Kacheri</span>
                <span>@KumbiKacheri</span>
            </div>
            <div>
                <Ellipsis/>
            </div>
        </div>
    )
};