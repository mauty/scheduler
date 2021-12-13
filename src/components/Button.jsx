import React from "react";

import "components/Button.scss";

import classNames from "classnames";

const Button = (props) => {
  const { onClick, disabled } = props;
  let buttonClasses = classNames({
    button: true,
    "button--confirm": props.confirm,
    "button--danger": props.danger,
  });

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {props.children}
    </button>
  );
};

export default Button;
