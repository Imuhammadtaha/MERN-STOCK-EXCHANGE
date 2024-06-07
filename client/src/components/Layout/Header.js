import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import SearchInput from "../Form/SearchInput";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { toast } from "react-toastify";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout successfully");
  };
  return (
    <>
      <div className="container-fluid main-cont">
        <div className="container">
          <div className="row pt-3 ">
            <div className="col-md-8">
              <h3 className="brand">LIVE IN STOCK</h3>
            </div>
            <div className="col-md-4 d-flex">
              <div className="currency me-2">
                <small>
                  USD ($) <FaAngleDown />
                </small>
              </div>
              <div className="search">
                <SearchInput />
              </div>
            </div>
          </div>
          <hr />
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active text-white"
                      aria-current="page"
                      href="/"
                    >
                      <b className="m-2 rale">Coins</b>
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/portfolio">
                      <b className="m-2 rale">Portfolio</b>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/overview">
                      <b className="m-2 rale">Overview</b>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/trending">
                      <b className="m-2 rale">Trending</b>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/add-note">
                      <b className="m-2 rale">Note</b>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/exchange">
                      <b className="m-2 rale">Exchanges</b>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/recommended">
                      <b className="m-2 rale">Recommended</b>
                    </Link>
                  </li>

                  {!auth.user ? (
                    <>
                      {" "}
                      <li className="nav-item">
                        <Link className="nav-link text-white" to="/login">
                          <button className="login rale">Login</button>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-white" to="/signup">
                          <button className="register rale">
                            <small>Register</small>
                          </button>
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle text-white"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <b>
                            <FaRegUserCircle className="me-2" size={25} />
                          </b>
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item text-white">
                              <h5 className="josef">{auth?.user?.name}</h5>
                            </Link>
                          </li>

                          <li>
                            <Link className="dropdown-item text-white">
                              <h6 className="josef">
                                Total Buying: {auth?.user?.totalBuying}
                              </h6>
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item text-white">
                              <h6 className="josef">
                                Total Selling: {auth?.user?.totalSelling}
                              </h6>
                            </Link>
                          </li>

                          <li>
                            <Link
                              onClick={handleLogout}
                              className="dropdown-item text-danger"
                            >
                              <b>Logout</b>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
