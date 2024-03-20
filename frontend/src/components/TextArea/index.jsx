import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const TextArea = React.forwardRef(
  (
    { className, name, placeholder, children, errors, onChange, ...restProps },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <textarea
          ref={ref}
          className={`${className}`}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          {...restProps}
        />
        {!!errors && <ErrorMessage errors={errors} />}

        {children}
      </>
    );
  },
);

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

TextArea.defaultProps = { className: "", name: "", placeholder: "" };
export { TextArea };
