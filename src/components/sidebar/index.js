import { MenuIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import { useState } from 'react'

export const Sidebar = ({
    children
}) => {
    const [opened, setOpemed] = useState(true);

    const className = clsx('h-full md:h-auto absolute md:relative transform flex flex-col bg-white w-2/3 md:w-72 px-5 rounded-2xl shadow-2xl', {
        '-translate-x-full md:translate-x-0': !opened
    });
    const menuButtonClassName = clsx('block md:hidden absolute -right-10 p-2 w-auto', {
        'h-screen': opened,
        'h-auto': !opened
    });
    return <div className={className}>
        {children}
        <div
            onClick={() => setOpemed(!opened)}
            className={menuButtonClassName}
        >
            <MenuIcon width={20} height={20}/>
        </div>
    </div>
}