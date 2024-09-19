import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,                         // This is already needed to provide with help when using
    addItem: (props) => {},             // with useContext otherwise provider and context both
    removeItem: (props) => {}           // can be in same file and this can be empty as well
});

export default CartContext;

// Why we use context
// Instead of passing data to multiple components(i.e. child components) as props we can make use of 
// context where we can maintain the common data at one place