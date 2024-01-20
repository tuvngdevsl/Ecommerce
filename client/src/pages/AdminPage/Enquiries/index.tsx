import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getEnquiries } from "../../../features/enquiry/enquirySlice";
import { AppDispatch } from "app/store";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
type Props = {};
const columns = [
  {
    title: "No",
    dataIndex: "key"
  },
  {
    title: "Name",
    dataIndex: "name"
  },
  {
    title: "Email",
    dataIndex: "email"
  },
  {
    title: "Phone",
    dataIndex: "phone"
  },
  {
    title: "Status",
    dataIndex: "status"
  },
  {
    title: "Action",
    dataIndex: "action"
  }
];

const Enquiries = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getEnquiries());
  }, [dispatch]);
  const enquiryState = useSelector((state: any) => state.enquiry.enquires);
  const data1: any = [];
  for (let i = 0; i < enquiryState.length; i++) {
    data1.push({
      key: i + 1,
      name: enquiryState[i].name,
      email: enquiryState[i].email,
      phone: enquiryState[i].phone,
      status: (
        <>
          <select name="" id="" className="form-control form-select">
            <option value="">Set status</option>
          </select>
        </>
      ),
      action: (
        <>
          <Link className="ms-3 fs-2 text-danger" to="/">
            <AiFillDelete />
          </Link>
        </>
      )
    });
  }
  return (
    <div>
      <h3 className="mb-4">Enquiries</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Enquiries;
