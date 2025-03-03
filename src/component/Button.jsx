import React from 'react'

function Button(props) {
    const { type, text, ...rest } = props;
  return (
    <>
      <button type={type} {...rest}>
        {text}
      </button>
    </>
  );
}

export default Button