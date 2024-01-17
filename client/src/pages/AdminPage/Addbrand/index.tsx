import { Input } from "antd";
import React from "react";

type Props = {};

const Addbrand = (props: Props) => {
  return (
    <div>
      <h3>Add Brand</h3>
      <div>
        <form action="">
          <div className="mt-4">
            <Input
              name="brand"
              type="text"
              placeholder="Enter Brand"
              classname="form-floating py-3"
            />
          </div>
          <button className="btn btn-success border-0 rounded-3 my-5 py-3" type="submit">
            Add Brand
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addbrand;
