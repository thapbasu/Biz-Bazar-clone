
import { Search } from '@material-ui/icons';
import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import ProductCard from './ProductCard';

const Header = () => {
  return (
    <>
    <header className="header-top-strip py-2">
      <div className="container-xxl">
      <div className='upper-menu-links'>
              <div className="d-flex align-items-center gap-15 ">
                <NavLink to='/' className='upper-links'>Help Center</NavLink>
                <NavLink to='/' className='upper-links'>Gifts Certificates</NavLink>
                <NavLink to='/' className='upper-links'>Our Brands</NavLink>
                <NavLink to='/contact' className='upper-links'>Become a seller</NavLink>
              </div>
            </div>
      </div>
    </header>
    <header className="header-upper py-2">
    <div className="container-xxl">
      <div className="row align-items-center">
        <div className="col-1-auto">
        <Link className=' icon'>
                  <img src ="images/hamburger.png" alt="" /></Link>
        </div>
      
        <div className="col-2 logo-icon">
            <Link className='d-flex align-items-center '>
            <img src ="images/logo.png" alt="" width="200" height="50"/>
            </Link>
            </div>
          <div className="col-5"> 
          <div class="input-group">
            <input type="text" class="form-control py-2" placeholder="Search Product Here" aria-label="Search Product Here" aria-describedby="basic-addon2" />
            <span class="input-group-text" id="basic-addon2"> <Search /></span>
            </div></div>
            <div className='col-2'>
              <p className='text-black mb-0'>
              <img src ="images/call.png" alt="" width="32" height="32"/> <a href='9817112439' className=''>9817112439</a>
              </p>
            </div>
            <div className="col-2">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
              <div>
                <Link>
                <img src='/images/bar-chart.png' alt=''></img>
                </Link>
              </div>
              <div>
                <Link>
                <img src='/images/heart.png' alt=''></img>
                </Link>
              </div>
              <div>
                <Link>
                <img src='/images/user.png' alt=''></img>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap'>
                <img src='/images/shopping-cart.png' alt=''></img>
                <div className='d-flex flex-column'>
                  <span className="badge bg-danger text-dark">0</span>
                </div>
                </Link>
              </div>
             
              
              </div>
            </div>
          </div>
        </div>
    
    </header>
    <header className="header-bottom py-3">
      <div className="container-xxl">
        <div className="col-12">
          <div className="menu-bottom d-flex align-items-center gap-30">
            <div>
                            <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
            </div>
            <div className='menu-links'>
              <div className="d-flex align-items-center gap-15">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>Our Store</NavLink>
                <NavLink to='/'>Blogs</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    </>
  )
}

export default Header;
