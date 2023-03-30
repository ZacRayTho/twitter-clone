import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    InboxStackIcon,
    EllipsisHorizontalCircleIcon,
    EnvelopeIcon,
    UserIcon,
    HomeIcon,
} from '@heroicons/react/24/outline'
import SidebarRow from './SidebarRow'

function Sidebar() {
    return (
        <div>
            <img
                className='h-10 w-10'
                src="https://links.papareact.com/drq"
                alt="Twitter Logo"
            />

            <SidebarRow Icon={HomeIcon} title="Home" />

            Sidebar
        </div>
    )
}

export default Sidebar