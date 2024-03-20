import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[10px]", circle: "rounded-[50%]" };
const variants = {
  outline: {
    white_A700: "outline outline-[0.75px] outline-white-A700 text-white-A700",
    gray_900: "outline outline-[0.5px] outline-gray-900 text-gray-900",
    gray_100: "outline outline-[0.75px] outline-gray-100 text-black-900",
  },
  fill: {
    gray_900: "bg-gray-900 text-white-A700",
    gray_100: "bg-gray-100 text-gray-500",
    green_600: "bg-green-600 text-white-A700",
    gray_900_67: "bg-gray-900_67",
    black_900: "bg-black-900 text-white-A700",
    white_A700: "bg-white-A700 text-gray-900",
    gray_50: "bg-gray-50 text-black-900",
    gray_900_26: "bg-gray-900_26 text-white-A700",
  },
};
const sizes = {
  xs: "p-[7px]",
  sm: "pr-[9px] py-[9px]",
  md: "p-2.5",
  lg: "p-[13px]",
  xl: "pr-[15px] py-[15px]",
  "2xl": "p-4",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "white_A700",
    "gray_900",
    "gray_100",
    "green_600",
    "gray_900_67",
    "black_900",
    "gray_50",
    "gray_900_26",
  ]),
};

export { Button };
