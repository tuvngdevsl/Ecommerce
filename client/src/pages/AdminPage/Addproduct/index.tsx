import { useEffect, useState } from "react";
import Input from "../../../components/Input";
import ReactQuill from "react-quill";
import * as Yup from "yup";
import { useFormik } from "formik";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../../features/brand/brandSlice";
import { getCategories } from "features/category/categorySlice";
import { getColors } from "features/color/colorSlice";
import { AppDispatch, RootState } from "app/store";
import "react-widgets/styles.css";
import Dropzone from "react-dropzone";
import { delImg, uploadImg } from "features/upload/uploadSlice";
import { createProducts } from "features/product/productSlice";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

type Props = {};

let schema = Yup.object().shape({
  title: Yup.string().required("Title is Required"),
  description: Yup.string().required("Description is Required"),
  price: Yup.number().required("Price is Required"),
  brand: Yup.string().required("Brand is Required"),
  category: Yup.string().required("Category is Required"),
  tags: Yup.string().required("Tag is Required"),
  color: Yup.array().min(1, "Choose at least one color").required("Color is Required"),
  quantity: Yup.number().required("Quantity is Required")
});
const Addproduct = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const [color, setColor] = useState<never[]>([]);

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getColors());
  }, [dispatch]);

  const brandState = useSelector((state: RootState) => state.brand.brands);
  const categoryState = useSelector((state: RootState) => state.category.categories);
  const colorState = useSelector((state: RootState) => state.color.colors);
  const imageState = useSelector((state: RootState) => state.upload.images);
  const newProduct = useSelector((state: RootState) => state.product);
  const { isSuccess, isError, isLoading, createdProduct } = newProduct;

  useEffect(() => {
    if (isSuccess && createdProduct.data) {
      toast.success("Product Add Successfully");
    }
    if (isError) {
      toast.error("Something went wrong");
    }
  }, [isError, isLoading, isSuccess, createdProduct]);

  const colorOpt: any = [];
  colorState.forEach((color: any) => {
    colorOpt.push({
      value: color._id,
      label: color.title
    });
  });

  const img: any = [];
  imageState.forEach((i: any) => {
    img.push({
      public_id: i.public_id,
      url: i.url
    });
  });
  useEffect(() => {
    formik.values.color = color;
    formik.values.images = img;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color, img]);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      brand: "",
      category: "",
      tags: "",
      color: [],
      images: "",
      quantity: ""
    },
    validationSchema: schema,
    onSubmit: values => {
      dispatch(createProducts(values));
      formik.resetForm();
      setColor([]);
      setTimeout(() => {
        navigate("/admin/list-product");
      }, 1000);
    }
  });

  const handleColor = (e: any) => {
    setColor(e);
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

          <select
            name="brand"
            onChange={formik.handleChange("brand")}
            onBlur={formik.handleBlur("brand")}
            value={formik.values.brand}
            id=""
            className="form-control py-3"
          >
            <option value="">Select Brand</option>
            {brandState.map((brand: any, index: any) => {
              return <option value={brand.title}>{brand.title}</option>;
            })}
          </select>

          <div className="error">{formik.touched.brand && formik.errors.brand}</div>
          <select
            name="category"
            id=""
            className="form-control py-3"
            onChange={formik.handleChange("category")}
            onBlur={formik.handleBlur("category")}
            value={formik.values.category}
          >
            <option value="">Select Category</option>
            {categoryState.map((category: any) => {
              return (
                <option key={category.id} value={category.title}>
                  {category.title}
                </option>
              );
            })}
          </select>
          <div className="error">{formik.touched.category && formik.errors.category}</div>

          <select
            name="tags"
            id=""
            className="form-control py-3"
            onChange={formik.handleChange("tags")}
            onBlur={formik.handleBlur("tags")}
            value={formik.values.tags}
          >
            <option value="" disabled>
              Select Tags
            </option>
            <option value="featured">Featured</option>
            <option value="popular">Popular</option>
            <option value="special">Special</option>
          </select>
          <div className="error">{formik.touched.tags && formik.errors.tags}</div>

          <Select
            mode="multiple"
            allowClear
            className="w-100"
            placeholder="Select colors"
            defaultValue={color}
            onChange={(i: any) => handleColor(i)}
            options={colorOpt}
          />
          <div className="error">{formik.touched.color && formik.errors.color}</div>

          <Input
            name="quantity"
            type="number"
            placeholder="Enter Product Quantity"
            classname="form-floating py-3"
            i_id=""
            value={formik.values.quantity}
            onchange={formik.handleChange("quantity")}
            onblur={formik.handleBlur("quantity")}
          />
          <div className="error">{formik.touched.quantity && formik.errors.quantity}</div>
          <div className="bg-white border-1 p-5 text-center">
            <Dropzone onDrop={acceptedFiles => dispatch(uploadImg(acceptedFiles))}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div className="show-images  d-flex flex-wrap gap-3">
            {imageState?.map((image: any, index: any) => {
              return (
                <div className="position-relative" key={index}>
                  <button
                    type="button"
                    onClick={() => dispatch(delImg(image.public_id))}
                    className="btn-close position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  ></button>
                  <img src={image.url} alt="" width={200} height={200} />
                </div>
              );
            })}
          </div>
          <button className="btn btn-success border-0 rounded-3 my-5 py-3" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
