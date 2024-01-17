import Meta from '../../components/Meta';
import BreadCrumb from '../../components/BreadCrumb';
import styles from './Blog.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Container from '../../components/Container';
const cx = classNames.bind(styles);

type Props = {};

const BlogDetail = (props: Props) => {
  return (
    <>
      <Meta title={'Dynamic Blog Name'} />
      <BreadCrumb title={'Dynamic Blog Name'} />
      <Container class1='blog-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className={cx('single-blog-card')}>
              <Link to='/blogs' className='d-flex align-items-center gap-10'>
                <HiOutlineArrowLeft className='fs-4' />
                Go back to Blogs
              </Link>
              <h3 className='title'>A beautiful Sunday Morning Renaissanse</h3>
              <img src='/images/blog-1.jpg' className='img-fluid w-100 my-4' alt='blog' />
              <p>
                You’re only as good as your last collection, which is an enormous pressure. I think there is something
                about luxury – it’s not something people need, but it’s what they want. It really pulls at their heart.
                I have a fantastic relationship with money.Scelerisque sociosqu ullamcorper urna nisl mollis vestibulum
                pretium commodo inceptos cum condimentum placerat diam venenatis blandit hac eget dis lacus a parturient
                a accumsan nisl ante vestibulum.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BlogDetail;
