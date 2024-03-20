import React from "react";

const sizeClasses = {
  txtOutfitMedium14: "font-medium font-outfit",
  txtUrbanistRegular14WhiteA700ab: "font-normal font-urbanist",
  txtOutfitRegular14Red600: "font-normal font-outfit",
  txtOutfitMedium18: "font-medium font-outfit",
  txtUrbanistSemiBold32Black900: "font-semibold font-urbanist",
  txtUrbanistSemiBold24: "font-semibold font-urbanist",
  txtUrbanistSemiBold20: "font-semibold font-urbanist",
  txtUrbanistMedium18: "font-medium font-urbanist",
  txtUrbanistRegular14Red600: "font-normal font-urbanist",
  txtOutfitSemiBold24: "font-outfit font-semibold",
  txtUrbanistRegular16: "font-normal font-urbanist",
  txtUrbanistRegular14WhiteA700a2: "font-normal font-urbanist",
  txtUrbanistMedium12Gray500: "font-medium font-urbanist",
  txtUrbanistMedium18Black900: "font-medium font-urbanist",
  txtUrbanistRegular18: "font-normal font-urbanist",
  txtUrbanistMedium14: "font-medium font-urbanist",
  txtUrbanistSemiBold16: "font-semibold font-urbanist",
  txtUrbanistSemiBold18: "font-semibold font-urbanist",
  txtOutfitMedium14Red600: "font-medium font-outfit",
  txtUrbanistMedium16: "font-medium font-urbanist",
  txtUrbanistMedium16Gray500ab: "font-medium font-urbanist",
  txtUrbanistMedium14Gray500: "font-medium font-urbanist",
  txtUrbanistRegular12: "font-normal font-urbanist",
  txtUrbanistMedium14Gray900: "font-medium font-urbanist",
  txtUrbanistMedium12Gray901: "font-medium font-urbanist",
  txtUrbanistRegular14: "font-normal font-urbanist",
  txtOutfitRegular14: "font-normal font-outfit",
  txtOutfitRegular10: "font-normal font-outfit",
  txtUrbanistMedium14Black900: "font-medium font-urbanist",
  txtUrbanistSemiBold34: "font-semibold font-urbanist",
  txtUrbanistMedium12: "font-medium font-urbanist",
  txtUrbanistSemiBold14: "font-semibold font-urbanist",
  txtUrbanistMedium14Green600: "font-medium font-urbanist",
  txtUrbanistRegular14Green600: "font-normal font-urbanist",
  txtUrbanistSemiBold32: "font-semibold font-urbanist",
  txtUrbanistRegular12Black900: "font-normal font-urbanist",
  txtUrbanistRegular14Gray500: "font-normal font-urbanist",
  txtUrbanistMedium12WhiteA700: "font-medium font-urbanist",
  txtOutfitSemiBold18: "font-outfit font-semibold",
  txtUrbanistSemiBold18Black900: "font-semibold font-urbanist",
  txtUrbanistRegular14Gray900ab: "font-normal font-urbanist",
  txtUrbanistRegular14WhiteA700: "font-normal font-urbanist",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
