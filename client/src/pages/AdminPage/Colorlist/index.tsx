import React from "react";
import { Table } from "antd";
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
    title: "Status",
    dataIndex: "status"
  }
];
const data1: any = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`
  });
}

const Colorlist = (props: Props) => {
  return (
    <div>
      <h3 className="mb-4">Colors</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Colorlist;
