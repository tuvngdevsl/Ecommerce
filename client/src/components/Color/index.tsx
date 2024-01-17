import React from 'react';
import classNames from 'classnames/bind';
import styles from '../../pages/OurStorePage/OurStore.module.scss';
const cx = classNames.bind(styles);

type Props = {};

const Color = (props: Props) => {
  return (
    <ul className={cx('colors', 'ps-0')}>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
};

export default Color;
