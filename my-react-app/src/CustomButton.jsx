import { forwardRef } from 'react';

const CustomButton = forwardRef(function CustomButton(props, ref) {
  return (
    <button ref={ref} {...props}>
      {props.children}
    </button>
  );
});

export default CustomButton;