import React from 'react';
import classNames from 'classnames/bind';
import styles from './BlogCard.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
type Props = {};

const BlogCard = (props: Props) => {
  return (
    <div className={cx('blog-card')}>
      <div className='card-image'>
        <img src='images/blog-1.jpg' className='img-fluid w-100' alt='blog' />
      </div>
      <div className={cx('blog-content')}>
        <p className={cx('date')}>29 Dec, 2023</p>
        <h5 className='title'>A beautiful sunday morning renaissance</h5>
        <p className='desc'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium expedita reprehenderit
        </p>
        <Link to='/blog/:id' className='button'>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
