import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav
          class="navbar navbar-expand-lg mb-1 navbar-light bg-info rounded-2"
         
        >
          <div class="container-fluid">
            <img
              src="https://png.pngtree.com/png-vector/20190521/ourmid/pngtree-hotel-icon-for-personal-and-commercial-use-png-image_1044892.jpg"
              width="40"
              alt="logo"
              class="navbar-brand rounded-5"
            />
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <Link to='/'></Link>
                <li class="nav-item" id="select">
                  {/* {disdata.map((items) => (
                    <option value={items} onClick={LoadProducts}>
                      {items.toUpperCase()}
                    </option>
                  ))} */}
                </li>
                {/*               
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to='/contact'>Contact</Link>
              </li> */}
              </ul>
              <form className="button-group d-flex">
                <Link
                  to="/register"
                  className="btn btn-outline-primary me-2"
                  type="submit"
                >
                  Registration
                </Link>
                <Link
                  to="/login"
                  className="btn btn-outline-success"
                  type="submit"
                >
                  Login
                </Link>
              </form>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
