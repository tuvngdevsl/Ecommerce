import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
const cx = classNames.bind(styles);

type Props = {};

const HeaderComponent = (props: Props) => {
  return (
    <div>
      <header className={cx('header-top-stript', 'py-2')}>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='mb-0'>Free shipping for orders over $100</p>
            </div>
            <div className='col-6'>
              <p className='text-end telephone'>
                Hotline:
                <a className='text-dark' href='tel:+84 865607622'>
                  +84 865607622
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className={cx('header-upper', 'py-3')}>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2>
                <Link className='text-dark' to='/'>
                  Northwest
                </Link>
              </h2>
            </div>
            <div className='col-5'>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control py-2'
                  placeholder='Search Product....'
                  aria-label='Search Product....'
                  aria-describedby='basic-addon2'
                />
                <span className='input-group-text p-3' id='basic-addon2'>
                  <BsSearch className='fs-5' />
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link to='/compare' className={cx('d-flex align-items-center text-dark', 'gap-10')}>
                    <img
                      src='https://static.thenounproject.com/png/465820-200.png'
                      alt=''
                      className={cx('header-img')}
                    />
                    <p className='mb-0'>
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='/wishlist' className={cx('d-flex align-items-center text-dark', 'gap-10')}>
                    <img
                      src='https://cdn-icons-png.flaticon.com/512/3132/3132924.png'
                      alt='wishlist'
                      className={cx('header-img')}
                    />
                    <p className='mb-0'>
                      Favourite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='/login' className={cx('d-flex align-items-center text-dark', 'gap-10')}>
                    <img
                      src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png'
                      alt='user'
                      className={cx('header-img')}
                    />
                    <p className='mb-0'>
                      Login <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='/cart' className={cx('d-flex align-items-center text-dark', 'gap-10')}>
                    <img
                      src='https://www.svgrepo.com/show/80543/shopping-cart-outline.svg'
                      alt='cart'
                      className={cx('header-img')}
                    />
                    <div className='d-flex flex-column'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='mb-0'>$ 5000</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className={cx('header-bottom', 'py-3')}>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className={cx('menu-bottom d-flex align-items-center', 'gap-30')}>
                <div>
                  <div className='dropdown'>
                    <button
                      className='btn dropdown-toggle d-flex justify-items-center align-items-center'
                      type='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <img
                        src='https://www.svgrepo.com/show/312300/hamburger-menu.svg'
                        alt='menu'
                        className={cx('header-img')}
                      />
                      <span className='me-5 fs-4 d-line-block'>Shop Categories</span>
                    </button>
                    <ul className={cx('dropdown-menu', 'menu')}>
                      <li>
                        <Link className={cx('dropdown-item', 'text-white')} to=''>
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className={cx('dropdown-item', 'text-white')} to=''>
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className={cx('dropdown-item', 'text-white')} to=''>
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={cx('menu-links')}>
                  <div className={cx('d-flex align-items-center', 'gap-15')}>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/product'>Our Store</NavLink>
                    <NavLink to='/blogs'>Blogs</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderComponent;
