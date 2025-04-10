import IconsPostwrite from './postMiniComponents/IconsPostwrite';

export default function HomePost({ }) {
    return (
        <div className="w-full h-fit px-5 flex flex-row items-start">
            <div className='flex flex-row w-fit py-2 mr-3'>
                <div className="w-12 flex flex-col justify-start aspect-square rounded-full overflow-hidden">
                    <img className="w-full h-full rounded-full object-cover" src="https://img.freepik.com/free-photo/closeup-view-calm-young-lady-street_74855-4995.jpg" alt="" />
                </div>
            </div>
            <div className='w-full flex flex-col justify-center items-start py-5'>
                <div className='w-full flex flex-col justify-center items-start mb-5'>
                    <span className='text-xl px-1 text-gray-500'>What's happening?</span>
                </div>
                <div>
                    <IconsPostwrite></IconsPostwrite>
                </div>
            </div>
        </div>
    )
};