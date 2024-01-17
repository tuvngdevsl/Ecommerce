import { Input } from "antd";
import React from "react";

type Props = {};

const Addcolor = (props: Props) => {
  return (
    <div>
      <h3>Add Color</h3>
      <div>
        <form action="">
          <div className="mt-4">
            <Input
              name="color"
              type="text"
              placeholder="Enter Color"
              classname="form-floating py-3"
            />
          </div>
          <button className="btn btn-success border-0 rounded-3 my-5 py-3" type="submit">
            Add Color
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcolor;
