import React, { useEffect, useState } from "react";
import Input from "../../../components/Input";
import ReactQuill from "react-quill";
import * as Yup from "yup";
import { useFormik } from "formik";
import "react-quill/dist/quill.snow.css";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../../features/brand/brandSlice";
import { getCategories } from "features/category/categorySlice";
import { getColors } from "features/color/colorSlice";
import { AppDispatch } from "app/store";
import Multiselect from "react-widgets/Multiselect";
import "react-widgets/styles.css";
interface Color {
  id: string;
  color: string;
}
type Props = {};
const { Dragger } = Upload;
const propsUpload = {
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

let schema = Yup.object().shape({
  title: Yup.string().required("Title is Required"),
  description: Yup.string().required("Description is Required"),
  price: Yup.number().required("Price is Required")
});
const Addproduct = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const [color, setColor] = useState([]);
  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getColors());
    // formik.values.color = color;
  }, []);
  const brandState = useSelector((state: any) => state.brand.brands);
  const categoryState = useSelector((state: any) => state.category.categories);
  const colorState = useSelector((state: any) => state.color.colors);
  const colors: Color[] = [];
  colorState.forEach((color: any) => {
    colors.push({
      id: color._id,
      color: color.title
    });
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: ""
    },
    validationSchema: schema,
    onSubmit: values => {
      alert(JSON.stringify(values));
    }
  });
  const [desc, setDesc] = useState("");
  const handleDesc = (e: any) => {
    setDesc(e);
    console.log(desc);
  };
  return (
    <div>
      <h3 className="mb-4">Add Product</h3>
      <div>
        <form onSubmit={formik.handleSubmit} className="d-flex gap-3 flex-column">
          <Input
            name=""
            type="text"
            placeholder="Enter Product Title"
            classname="form-floating py-3"
            i_id=""
            value={formik.values.title}
            onchange={formik.handleChange("title")}
            onblur={formik.handleBlur("title")}
          />
          <div className="error">{formik.touched.title && formik.errors.title}</div>
          <div className="">
            <ReactQuill
              theme="snow"
              onChange={formik.handleChange("description")}
              value={formik.values.description}
            />
          </div>
          <div className="error">{formik.touched.description && formik.errors.description}</div>
          <Input
            name=""
            type="text"
            placeholder="Enter Product Price"
            classname="form-floating py-3"
            i_id=""
            value={formik.values.price}
            onchange={formik.handleChange("price")}
            onblur={formik.handleBlur("price")}
          />
          <div className="error">{formik.touched.price && formik.errors.price}</div>
          <select name="" id="" className="form-control py-3">
            <option value="">Select Brand</option>
            {brandState.map((brand: any, index: any) => {
              return (
                <option key={index} value={brand.title}>
                  {brand.title}
                </option>
              );
            })}
          </select>
          <select name="" id="" className="form-control py-3">
            <option value="">Select Category</option>
            {categoryState.map((category: any) => {
              return (
                <option key={category.id} value={category.title}>
                  {category.title}
                </option>
              );
            })}
          </select>
          <Multiselect
            dataKey="id"
            textField="color"
            data={colors}
            onChange={(e: any) => setColor(e)}
          />
          <Dragger {...propsUpload}>
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
