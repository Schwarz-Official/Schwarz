import React from "react";
import {motion} from "framer-motion"
import {Link} from "react-router-dom";

export const SubHeading = ({text, classname, initial, animate, transition, ...restProps}) => {
    return (
        <motion.div initial={initial} animate={animate}
                        transition={transition} {...restProps}>
            <p className={"max-md:text-sm mb-[32px] max-md:mb-[32px] "
            + classname}>
                {text}
            </p>
        </motion.div>
    );
};
