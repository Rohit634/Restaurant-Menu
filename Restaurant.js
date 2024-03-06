import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const updatedList = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category;
        })
    ),
    "All",
];

console.log(updatedList);

const Restaurant = () => {

    const [menuData, setMenuData] = useState(Menu);

    const filterItem = (category) => {
        const updatedList = Menu.filter((curElem) => {
          return curElem.category === category;  
        });

        setMenuData(updatedList);
    };
    
  return (
    <>
    
    <Navbar filterItem={filterItem}/>
    <MenuCard menuData={menuData} />
    </>
  )
    
  
};

export default Restaurant
