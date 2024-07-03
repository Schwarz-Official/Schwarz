import React from "react";
import {motion} from "framer-motion"

export const Heading = ({text, initial, animate, transition, classname, ...restProps}) => {
    return (
        <motion.div initial={initial} animate={animate}
                    transition={transition} {...restProps}>
            <h1 className={"font-bold mb-[4px] " + classname}>{text}</h1>
        </motion.div>
    );
};