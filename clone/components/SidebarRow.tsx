import React, { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react'

interface Props {
    // Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    Icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & { title?: string | undefined; titleId?: string | undefined; } & RefAttributes<SVGSVGElement>>
    title: string
    onClick?: () => {}
}

function SidebarRow({Icon, title, onClick}: Props) {
    return (
        <div onClick={() => onClick?.()}
        className='flex max-w-fit cursor-pointer items-center space-x-2
            px-4 py-3 rounded-full transition-all duration-200
             hover:bg-gray-100 group'>
            <Icon className='h-6 w-6'/>
            <p className='text-base font-light 
            group-hover:text-twitter hidden md:inline-flex lg:text-xl'>{title}</p>

        </div>
    )
}


export default SidebarRow