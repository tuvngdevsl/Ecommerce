import React, { useEffect } from "react";
import { Table } from "antd";
import { AppDispatch, RootState } from "app/store";
import { useDispatch, useSelector } from "react-redux";
import { getBlogCategories } from "features/bCategory/bCategorySlice";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
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

const Blogcatlist = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogCategories());
  }, [dispatch]);

  const bCategoryState = useSelector((state: RootState) => state.bCategory.bCategories);
  const data1: any = [];
  for (let i = 0; i < bCategoryState.length; i++) {
    data1.push({
      key: i + 1,
      title: bCategoryState[i].title,
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
      <h3 className="mb-4">Blog Categories</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Blogcatlist;
