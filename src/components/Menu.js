import React, { useState } from 'react';
import items from './menuData.js';

function Menu({ isSignedIn }) {
    const [menuItems, setMenuItems] = useState(items)

    // redoing this 
    // const filterItems = (category) => {
    //     if (category === 'all') {
    //         setMenuItems(items)
    //         return
    //     }
    //     const newItems = items.filter((item) => item.category === category)
    //     setMenuItems(newItems)
    // }

    // const Categories = ({ categories, filterItems }) => {
    //     return (
    //         <div className="btn-container">
    //             {categories.map((category, index) => {
    //                 return (
    //                     <button
    //                         type="button"
    //                         className="filter-btn"
    //                         key={index}
    //                         onClick={() => filterItems(category)}
    //                     >
    //                         {category}
    //                     </button>
    //                 )
    //             })}
    //         </div>
    //     )
    // }

    // const menu = ({ items }) => {
    //     return (
    //         <div className="section-center">
    //             {items.map((menuItem) => {
    //                 const { id, title, img, price, desc } = menuItem
    //                 return (
    //                     <article key={id} className="menu-item">
    //                         <img src={img} alt={title} className="photo" />
    //                         <div className="item-info">
    //                             <header>
    //                                 <h4>{title}</h4>
    //                                 <h4 className="price">N{price}</h4>
    //                             </header>
    //                             <p className="item-text">{desc}</p>
    //                         </div>
    //                     </article>
    //                 )
    //             })}
    //         </div>
    //     )
    // }

    // new functions (rework)
    // all categories

    // breakfast category
    function breakfastCategory() {
        let newMenuItems
        for (let i = 0; i < menuItems.length; i++) {
            if (items[i].category === "breakfast") {
                newMenuItems.push(items[i])
            }
        }
    }

    // lunch category

    // dinner category



    return (
        <section className="menu section">
            <div className="title">
                <h2>our menu</h2>
                <div className="underline"></div>
            </div>
            <div className="categories">
                <button>All</button>
                <button>Breakfast</button>
                <button>Lunch</button>
                <button>Dinner</button>
            </div>
            <div className="menu">

            </div>
            {/* <Categories categories={categories} filterItems={filterItems} />
            <menu items={menuItems} />
            {() => menu(menuItems)} */}
        </section>
    )
}

export default Menu;