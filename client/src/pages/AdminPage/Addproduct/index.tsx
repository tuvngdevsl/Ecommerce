import React, { useState } from "react";
import Input from "../../../components/Input";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";

type Props = {};

const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info: any) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e: any) {
    console.log("Dropped files", e.dataTransfer.files);
  }
};

const Addproduct = (props: Props) => {
  const [desc, setDesc] = useState("");
  const handleDesc = (e: any) => {
    setDesc(e);
    console.log(desc);
  };
  return (
    <div>
      <h3 className="mb-4">Add Product</h3>

      <div className="">
        <form action="">
          <Input
            name=""
            type="text"
            placeholder="Enter Product Title"
            classname="form-floating py-3 mb-3"
          />
          <div className="mb-3">
            <ReactQuill theme="snow" value={desc} onChange={e => handleDesc(e)} />
          </div>
          <Input
            name=""
            type="text"
            placeholder="Enter Product Price"
            classname="form-floating py-3 mb-3"
          />
          <select name="" id="" className="form-control py-3 mb-3">
            <option value="">Select Brand</option>
          </select>
          <select name="" id="" className="form-control py-3 mb-3">
            <option value="">Select Category</option>
          </select>
          <select name="" id="" className="form-control py-3 mb-3">
            <option value="">Select Color</option>
          </select>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from uploading company data
              or other banned files.
            </p>
          </Dragger>

          <button className="btn btn-success border-0 rounded-3 my-5 py-3" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
