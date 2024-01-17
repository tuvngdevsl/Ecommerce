import { Table } from "antd";
import { getProducts } from "../../../features/product/productSlice";
import { AppDispatch } from "../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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
    dataIndex: "title",
    sorter: (a: any, b: any) => a.title.length - b.title.length
  },
  {
    title: "Brand",
    dataIndex: "brand",
    sorter: (a: any, b: any) => a.brand.length - b.brand.length
  },
  {
    title: "Category",
    dataIndex: "category",
    sorter: (a: any, b: any) => a.category.length - b.category.length
  },
  {
    title: "Color",
    dataIndex: "color"
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a: any, b: any) => a.price - b.price
  },
  {
    title: "Action",
    dataIndex: "action"
  }
];

const Productlist = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const productState = useSelector((state: any) => state.product.products);

  const data1: any = [];
  for (let i = 0; i < productState.length; i++) {
    data1.push({
      key: i + 1,
      title: productState[i].title,
      brand: productState[i].brand,
      category: productState[i].category,
      color: productState[i].color,
      price: `${productState[i].price}`,
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
      <h3 className="mb-4">Products</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Productlist;
