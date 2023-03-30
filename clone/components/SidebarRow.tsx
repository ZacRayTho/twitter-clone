import React, { ForwardRefExoticComponent, SVGProps } from 'react'

interface Props {
    Icon: (ForwardRefExoticComponent<SVGProps<SVGSVGElement> & { title?: string | undefined; titleId?: string | undefined; }>)
    title: string
}

function SidebarRow({Icon, title}: Props) {
    return (
        <div className='flex max-w-fit cursor-pointer items-center space-x-2
            px-4 py-3 rounded-full transition-all duration-200
             hover:bg-gray-100 group'>
            <Icon className='h-6 w-6'/>
            <p className='group-hover:text-twitter'>{title}</p>

        </div>
    )
}


export default SidebarRow