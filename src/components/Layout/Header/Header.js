import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsJpg from "../../../assets/meals.JPG";    // Just like classes the extension name as well will be transpiled
const Header = (props) => {                 // and injected into the component unlike components just like css file

    return (
        <Fragment>
            <div className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.modalDialog} text="Your Cart"/>
            </div>
            <div className={classes['main-image']}>
                <img src={mealsJpg} alt="A table full of delicious food!!"></img>
            </div>
        </ Fragment>
    )
}

export default Header;

/* We do classes['main-image'] in line 11 as the className in css file has hyphen inbetween them so we cannot
use dot notation we have to go with square bracket approach
*/

/* Compile -> Converting of a source code to machine code(means high level to low level) 
   Transpile -> Converting of one high level to another high level(like typescript to javascript)
*/
