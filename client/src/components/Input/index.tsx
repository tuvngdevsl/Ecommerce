import React from "react";

type Props = {
  type: string;
  name: string;
  placeholder: string;
  classname: string;
};

const Input = (props: Props) => {
  return (
    <div>
      <input
        type={props.type}
        name={props.name}
        className={`form-control ${props.classname}`}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
