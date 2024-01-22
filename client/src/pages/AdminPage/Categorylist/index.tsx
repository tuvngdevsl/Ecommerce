import React, { useEffect } from "react";
import { Table } from "antd";
import { AppDispatch } from "app/store";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "features/category/categorySlice";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { RootState } from "../../../app/store";
type Props = {};
const columns = [
  {
    title: "No",
    dataIndex: "key"
  },
  {
    title: "Title",
    dataIndex: "title"
  },
  {
    title: "Action",
    dataIndex: "action"
  }
];

const Categorylist = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categoriesState = useSelector((state: RootState) => state.category.categories);

  const data1: any = [];
  for (let i = 0; i < categoriesState.length; i++) {
    data1.push({
      key: i + 1,
      title: categoriesState[i].title,
      action: (
        <>
          <Link className="fs-2 text-danger" to="/">
            <BiEdit />
          </Link>
          <Link className="ms-3 fs-2 text-danger" to="/">
            <AiFillDelete />
          </Link>
        </>
      )
    });
  }
  return (
    <div>
      <h3 className="mb-4">Product Categories</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Categorylist;
