import React from 'react';

export const Tab = ( {text, icon, isActive, onClick, classname, ...restProps} ) => {
    return (
        <div className={`flex items-center gap-2 p-4 mr-2 hover:cursor-pointer hover 
        hover:shadow-[inset_0_-2px_0_0_#3b82f6] dark:text-neutral-300 ${isActive ? 'bg-neutral-100 dark:bg-neutral-700 shadow-[inset_0_-2px_0_0_#3b82f6]' : ''} 
        transition-all ease-in-out duration-300 ` + classname} onClick={onClick} {...restProps}>
            {icon}
            {text}
        </div>
    );
};
