import React from "react";

const Text = ({children, className = "", size, as, ...restProps}) => {
    const Component = as || "p";

    return (
        <Component
            className={`text-left ${className} ${size}`}
            {...restProps}
        >
            {children}
        </Component>
    );
};

export {Text};
