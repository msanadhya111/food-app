import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [modal, setModalPopup] = useState(false);
  const modalOpenHandler = () => {
    setModalPopup(true);
  };
  const closeModalPopup = () => {
    setModalPopup(false);
  }

  return (
    <CartProvider>
      {modal && <Cart modalDialog={closeModalPopup} />}
      <Header modalDialog={modalOpenHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;

/*
React Advantages
1) React gives very good developer experience -> It has JS and html in the same file, if we have in different
files then in html we have do stuff like running for loop in html and doing many js thing in html but when
they are in same we can do all those in js and put the data in variable and put in html part of the file

2) React is very fast -> The size of the react is very low like 6kb size plus updating the dom is always
very expensive operation but with Virtual DOM conceot where it first checks in virtual dom and then only
update the dom, it all handle by React, this operation handled in the best possible way by react

3) React is flexible -> Means learning framework(actually it's a library) and use it at different places
like React native for mobile, react js for web
*/
