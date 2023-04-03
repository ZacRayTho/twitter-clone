import React, { useState } from 'react'
import {
    CalendarIcon,
    FaceSmileIcon,
    MapPinIcon,
    PhotoIcon,
    MagnifyingGlassCircleIcon,
} from '@heroicons/react/24/outline'

function Tweetbox() {
    const [input, setInput] = useState<string>('')

    return (
        <div className='flex space-x-2 p-5'>
            <img className="h-14 w-14 object-cover rounded-full mt-4" src="https://links.papareact.com/gll" alt="Profile Icon" />

            <div className="flex flex-1 items-center pl-2">
                <form className='flex flex-1 flex-col'>
                    <input
                        className="h-24 w-full text-xl outline-none placeholder:text-xl"
                        type="text"
                        placeholder="What's Happening?"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <div className='flex items-center justify-between'>
                        <div className='flex space-x-2 text-twitter'>
                            <PhotoIcon className='h-5 w-5 cursor-pointer transition-transform
                            duration-150 ease-out hover:scale-150' />
                            <MagnifyingGlassCircleIcon className='h-5 w-5' />
                            <FaceSmileIcon className='h-5 w-5' />
                            <CalendarIcon className='h-5 w-5' />
                            <MapPinIcon className='h-5 w-5' />
                        </div>
                        <button disabled={!input}
                            className='rounded-full text-white font-bold bg-twitter px-5 py-2 disabled:opacity-40'>Tweet</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Tweetbox