import React from "react";

function CustomButton(props) {
  const { type } = props;

  return (
    <span className={`btn-type background-${type}`}>
      {type.charAt(0).toUpperCase()}
      {type.slice(1)}
    </span>
  );
}

export default CustomButton;
