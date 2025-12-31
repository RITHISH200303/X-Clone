import ReplyTypePost from './postMiniComponents/ReplyTypePost'
import IconPostWrite from './postMiniComponents/IconPostWrite'
import PostCardMedia from './postMiniComponents/PostCardMedia'
import { useState } from 'react'
import { useRef } from 'react'

export default function HomePost({ }) {
    let [postText, setPostText] = useState("")
    let currentPostText = useRef("")
    let inputPostText = function() {
        setPostText(currentPostText.current.value);
    }
    return (
        <div className='w-full'>
            <div className="w-full h-fit px-4 flex flex-row items-start border-solid border-b-[1px] border-gray-300/40">
                <div className='flex flex-row w-fit py-2 mr-3'>
                    <div className="w-11 flex flex-col justify-start aspect-square rounded-full overflow-hidden">
                        <img className="w-full h-full rounded-full object-cover" src="https://i.pinimg.com/736x/76/5b/bc/765bbc893a035f5517d151a411f5df72.jpg" alt="" />
                    </div>
                </div>
                <div className='w-full flex flex-col justify-center items-start pt-3.5 text-lg text-gray-800 font-medium'>
                    <div className='w-full flex flex-col justify-center items-start mb-5'>
                        <textarea onChange={inputPostText} ref={currentPostText} className='resize-none over border-none outline-none placeholder-gray-500 text-xl'placeholder="What's happening?"/>
                    </div>
                    <div className='w-full'>
                        <ReplyTypePost></ReplyTypePost>
                        <IconPostWrite postLength = {postText}></IconPostWrite>
                    </div>
                </div>
            </div>
            <PostCardMedia></PostCardMedia>
            <PostCardMedia></PostCardMedia>
            <PostCardMedia></PostCardMedia>
        </div>
    )
};