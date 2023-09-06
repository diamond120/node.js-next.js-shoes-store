import * as React from "react";
import Link from "next/link";
import { Hamburger, ShoppingCartIcon, Logo, Cart } from "../../";
import MobileNavLinks from "./mobileNavLinks";
import { useShoppingCart } from "../../../../context/shoppingCartContext";

const navItem = [
  "men",
  "women",
  "categories",
  "lookbook",
  "sale",
  "our story",
  "contact",
];
const Header = () => {
  const [showNavBar, setShowNavBar] = React.useState(false);
  const handleShowNavBar = () => setShowNavBar(!showNavBar);
  const [showCart, setShowCart] = React.useState(false);
  const { shoppingCart } = useShoppingCart();
  const handleShowCart = () => {
    window.document.body.style.overflowY = "hidden";
    setShowCart(true);
  };
  const handleHideCart = () => {
    window.document.body.style.overflowY = "auto";
    setShowCart(false);
  };
  return (
    <header
      className="container px-[2.4rem] py-[2.4rem] xsm:px-[1rem] md:px-[2rem] md:py-[1rem] items-center"
      tabIndex={-1}
    >
      {showNavBar ? (
        <div className="hidden md:block bg-fourth opacity-75 absolute h-[100vh] w-[100%] left-0 top-0 z-0 transition-all duration-[.2s]"></div>
      ) : null}
      <nav className="flex items-center  justify-between ">
        <Hamburger
          className="hidden md:block"
          color="#6e7051"
          onClick={() => setShowNavBar(true)}
        />
        <MobileNavLinks show={showNavBar} setShowNavBar={handleShowNavBar} />
        <Link href="/">
          <a className="hidden md:block">
            <Logo
              className="hidden md:block translate-y-[13%]"
              width={126}
              height={30}
            />
          </a>
        </Link>
        <div className="flex items-center gap-[3.5rem] md:hidden">
          <Link href="/">
            <a>
              <Logo className="md:hidden" width={139} height={24} />
            </a>
          </Link>
          <ul className="flex  gap-[1.8rem] ">
            {navItem.slice(0, navItem.length - 2).map((item, idx) => (
              <li
                key={idx}
                className="text-fourth uppercase font-inter text-[0.88rem] font-semibold transition-all duration-[.5s]"
              >
                <Link href="">
                  <a className=" text-fourth transition-all duration-[.5s] hover:text-third focus:text-third">
                    {item}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center gap-[2rem] ">
          <ul className="flex items-center gap-[1.8rem] md:hidden">
            {navItem.slice(navItem.length - 2).map((item, idx) => (
              <li
                key={idx}
                className=" uppercase font-inter text-[0.88rem] font-semibold"
              >
                <Link href="">
                  <a className=" text-fourth transition-all duration-[.5s] hover:text-third focus:text-third">
                    {item}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="relative cursor-pointer " onClick={handleShowCart}>
            <span className="absolute text-[1rem] font-semibold  top-[25%] left-[36%] text-primary">
              {shoppingCart ? shoppingCart.length : 0}
            </span>
            <ShoppingCartIcon width="35px" height="35px" color="#6e7051" />
          </div>
        </div>
      </nav>
      <Cart showCart={showCart} handleHideCart={handleHideCart} />
    </header>
  );
};

export default Header;
