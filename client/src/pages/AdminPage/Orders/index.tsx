import React, { useEffect } from "react";
import { Table } from "antd";
import { AppDispatch } from "app/store";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "features/order/orderSlice";
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
    title: "Name",
    dataIndex: "name"
  },
  {
    title: "Product",
    dataIndex: "product"
  },
  {
    title: "Amount",
    dataIndex: "amount"
  },
  {
    title: "Date",
    dataIndex: "date"
  },
  {
    title: "Action",
    dataIndex: "action"
  }
];

const Orders = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  const orderState = useSelector((state: any) => state.order.orders);
  console.log(orderState);
  const data1: any = [];
  for (let i = 0; i < orderState.length; i++) {
    data1.push({
      key: i,
      name: orderState[i].orderby.fullname,
      product: orderState[i].products.map((data: any, index: any) => {
        return (
          <>
            <ul key={index}>
              <li>{data.product?.title}</li>
            </ul>
          </>
        );
      }),
      amount: orderState[i].paymentIntent.amount,
      date: new Date(orderState[i].createdAt).toLocaleString(),
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
      <h3 className="mb-4">Orders</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Orders;
