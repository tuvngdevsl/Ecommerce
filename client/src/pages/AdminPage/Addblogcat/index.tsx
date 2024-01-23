import { Input } from "antd";
import React from "react";

type Props = {};

const Addblogcat = (props: Props) => {
  return (
    <div>
      <h3>Add Blog Category</h3>
      <div>
        <form action="">
          <div className="mt-4">
            <Input
              name="blog category"
              type="text"
              placeholder="Enter Blog Category"
              className="form-floating py-3"
            />
          </div>
          <button className="btn btn-success border-0 rounded-3 my-5 py-3" type="submit">
            Add Blog Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addblogcat;
