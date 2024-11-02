import React from 'react';

export const VerticalTab = ({text, icon, isActive, onClick, classname, ...restProps}) => {
    return (
        <div className={`flex items-center rounded-lg gap-2 px-4 py-2 mr-2 hover:cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700 ${isActive ? 'hover:bg-neutral-200 dark:hover:bg-neutral-800 bg-neutral-200 dark:bg-neutral-800 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]' : ''}
        transition-all ease-in-out duration-300 ` + classname} onClick={onClick} {...restProps}>
            {icon}
            <div className={`font-bold ${isActive ? 'text-neutral-600 dark:text-neutral-400' : 'text-neutral-500 dark:text-neutral-300'}`}>{text}</div>
        </div>
    );
}
