import React, { ForwardRefExoticComponent, SVGProps } from 'react'

interface Props {
    Icon: (ForwardRefExoticComponent<SVGProps<SVGSVGElement> & { title?: string | undefined; titleId?: string | undefined; }>)
    title: string
}

function SidebarRow({Icon, title}: Props) {
    return (
        <div className='flex'>
            <Icon className='h-6 w-6'/>
            <p>{title}</p>

        </div>
    )
}


export default SidebarRow