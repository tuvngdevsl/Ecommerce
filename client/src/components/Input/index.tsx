import React from "react";

type Props = {
  type: string;
  name: string;
  placeholder: string;
  classname: string;
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onblur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  i_id: string;
};

const Input = (props: Props) => {
  return (
    <div>
      <input
        type={props.type}
        name={props.name}
        className={`form-control ${props.classname}`}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onchange}
        onBlur={props.onchange}
        id={props.i_id}
      />
    </div>
  );
};

export default Input;
