import React from 'react';
    
const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light sticky-top">
      <div>
      <span className='toggle'><i class="bi bi-text-left"></i></span>
      <img src='https://infomericainc.com/Content/images/logo.png' height="60px"  alt='Logo'></img>
      </div>
      <div className='col-8 d-flex justify-content-around'>
          <span>HOME</span>
          <span>ABOUTUS</span>
          <span>INDUSTRIES</span>
          <span>SERVICES</span>
          <span>SOLUTIONS</span>
          <span>CONTACT US</span>
          <span>CSR</span>
          <span>CAREERS</span>
      </div>
    </nav>
  );
};
export default Navbar;