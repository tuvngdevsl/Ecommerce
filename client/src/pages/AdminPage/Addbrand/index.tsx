import { Input } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { AppDispatch } from "app/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createBrands } from "features/brand/brandSlice";

let schema = Yup.object().shape({
  title: Yup.string().required("Brand name is Required")
});
type Props = {};

const Addbrand = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const newBrand = useSelector((state: any) => state.brand);
  const { createdBrand, isError, isLoading, isSuccess } = newBrand;
  useEffect(() => {
    if (isSuccess && createdBrand) {
      toast.success("Add Brand successfully!");
    } else {
      toast.error("Something went wrong");
    }
  }, [isLoading, isSuccess, isError, createdBrand]);

  const formik = useFormik({
    initialValues: {
      title: ""
    },
    validationSchema: schema,
    onSubmit: (values: any) => {
      dispatch(createBrands(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/list-brand");
      }, 3000);
    }
  });

  return (
    <div>
      <h3>Add Brand</h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit} className="d-flex gap-3 flex-column">
          <div className="mt-4">
            <Input
              name="title"
              type="text"
              placeholder="Enter Brand"
              className="form-floating py-3"
              value={formik.values.title}
              onChange={formik.handleChange("title")}
              onBlur={formik.handleBlur("title")}
            />
          </div>
          <div className="error">{formik.touched.title && formik.errors.title}</div>

          <button className="btn btn-success border-0 rounded-3 my-5 py-3" type="submit">
            Add Brand
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addbrand;
