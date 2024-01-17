import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "app/store";
import { getBlogs } from "features/blog/blogSlice";
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
    title: "Category",
    dataIndex: "category"
  },
  {
    title: "Action",
    dataIndex: "action"
  }
];

const Bloglist = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  const blogState = useSelector((state: any) => state.blog.blogs);
  const data1: any = [];
  for (let i = 0; i < blogState.length; i++) {
    data1.push({
      key: i + 1,
      title: blogState[i].title,
      category: blogState[i].category,
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
      <h3 className="mb-4">Blogs</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Bloglist;
