import React, { useContext, useEffect, useState } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/images/freshcart-logo.svg";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { CartContext } from "../../Context/CartContext";
// import { CounterContext } from '../../Context/CounterContext';

export default function Navbar() {

  const { cart } = useContext(CartContext);

  useEffect(() => {

    cart

  }, [])


  const [toggle, setToggle] = useState(true);
  const { userLogin, setUserLogin } = useContext(UserContext);

  // const {counter} = useContext(CounterContext)

  // const {count , setCount} = useContext(CounterContext)


  function logout() {
    setUserLogin(null);
    localStorage.removeItem("userToken");
  }

  function toggleNav() {
    setToggle(!toggle);
  }





  return (
    <>
      <nav className="bg-gray-200  z-50 fixed top-0 inset-x-0 py-2 text-center capitalize">
        <div className="container  w-full flex flex-col md:flex-row justify-around  items-center text-gray-500">




          <div className="flex items-center flex-row md:justify-around justify-evenly w-full md:w-fit md:block py-2">
            <img src={logo} width={120} alt="" />
            <div
              onClick={() => {
                toggleNav();
              }}
              className="cursor-pointer md:hidden"
            >
              <i className=" fa-solid fa-bars"></i>
            </div>
          </div>


          <div>
            <ul
              className={`${toggle ? "hidden" : ""
                }  md:flex items-center  flex-col md:flex-row space-x-3`}
            >
              {userLogin !== null ? (
                <>
                  <li className="py-2">
                    <NavLink to="" onClick={() => setToggle(true)}>Home</NavLink>
                  </li>

                  <li className="py-2">
                    <NavLink to="wishlist" onClick={() => setToggle(true)}>wish List</NavLink>
                  </li>

                  <li className="py-2">
                    <NavLink to="products" onClick={() => setToggle(true)}>products</NavLink>
                  </li>
                  <li className="py-2">
                    <NavLink to="categories" onClick={() => setToggle(true)}>categories</NavLink>
                  </li>
                  <li className="py-2">
                    <NavLink to="brands" onClick={() => setToggle(true)}>brands</NavLink>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
          </div>






          <div >
            <ul
              className={`${toggle ? "hidden " : ""
                } md:flex items-center flex-col md:flex-row space-x-3`}
            >



              {userLogin ? (
                <>
                  <li className="py-2 relative ">
                    <NavLink onClick={() => setToggle(true)} to="cart"><i className="fa-solid fa-cart-shopping fa-2xl text-main"></i>
                      <span className="text-white absolute left-1/2 top-[5px] -translate-x-1/2">{cart ? cart.numOfCartItems : 0}</span>
                    </NavLink>
                  </li>
                  <li className="py-2 ">
                    <Link

                      to="login"
                      onClick={() => {
                        logout();
                        setToggle(true)
                      }}
                    >
                      logout
                    </Link>
                  </li>
                </>


              ) : (
                <>
                  <li className="py-2">
                    <NavLink to="login" onClick={() => setToggle(true)}>Login</NavLink>
                  </li>
                  <li className="py-2">
                    <NavLink to="register" onClick={() => setToggle(true)}>Register</NavLink>
                  </li>
                </>
              )}
              {/* <li className="space-x-2 text-black py-2">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
              </li> */}


            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
