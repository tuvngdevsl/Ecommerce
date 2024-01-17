import { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../features/customers/customerSlice';
import { AppDispatch } from '../../../app/store';
type Props = {};
const columns = [
  {
    title: 'No',
    dataIndex: 'key'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a: any, b: any) => a.name.length - b.name.length
  },
  {
    title: 'Email',
    dataIndex: 'email'
  },
  {
    title: 'Phone',
    dataIndex: 'phone'
  }
];

const Customers = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const customerState = useSelector((state: any) => state.customer.customers);
  const data1: any = [];
  for (let i = 0; i < customerState.length; i++) {
    if (customerState[i].role !== 'user') {
      data1.push({
        key: i + 1,
        name: customerState[i].fullname,
        email: customerState[i].email,
        phone: customerState[i].phone
      });
    }
  }

  return (
    <div>
      <h3 className='mb-4'>Customers</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Customers;
