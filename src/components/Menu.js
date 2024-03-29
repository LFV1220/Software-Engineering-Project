import React, { useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
import items from './menuData.js';

function Menu({ isSignedIn, cart, setCart }) {
    const [menuItems, setMenuItems] = useState(items)

    // change category
    function handleCategory(categoryType) {
        let newMenuItems = []

        // breakfast category
        if (categoryType === "breakfast") {
            for (let i = 0; i < items.length; i++) {
                if (items[i].category === "breakfast") {
                    newMenuItems.push(items[i])
                }
            }
        }
        // lunch category
        else if (categoryType === "lunch") {
            for (let i = 0; i < items.length; i++) {
                if (items[i].category === "lunch") {
                    newMenuItems.push(items[i])
                }
            }
        }
        // dinner category
        else if (categoryType === "dinner") {
            for (let i = 0; i < items.length; i++) {
                if (items[i].category === "dinner") {
                    newMenuItems.push(items[i])
                }
            }
        }
        else {
            setMenuItems(items)
            return
        }

        setMenuItems(newMenuItems)
    }

    // add menu item to cart 
    function addToCart(menuItem) {
        setCart([...cart, menuItem])
        alert(`Added ${menuItem.title} to your cart.`)
    }

    // menu items
    function handleMenuItems(menuItems) {
        return (
            <div className="card-container">
                {menuItems.map((menuItem) => (
                    <MDBCard key={menuItem.id} className="menu-card">
                        <MDBCardImage className="card-image" src={menuItem.img} position='top' alt={menuItem.title} />
                        <MDBCardBody>
                            <MDBCardTitle className="card-title">{menuItem.title}</MDBCardTitle>
                            <MDBCardText className="card-desc">{menuItem.desc}</MDBCardText>
                            {isSignedIn
                                ? <MDBBtn className="card-btn" onClick={() => addToCart(menuItem)}>Add to Cart</MDBBtn>
                                : null}
                        </MDBCardBody>
                    </MDBCard>
                ))
                }
            </div >
        );
    }

    return (
        <div className="all-menu">
            <section className="menu-section">
                <div className="title">
                    <h2 style={{ color: 'white' }}>Restaurant Menu</h2>
                    <div className="underline"></div>
                </div>
                <div className="categories">
                    <button className="category" onClick={() => handleCategory("all")}>All</button>
                    <button className="category" onClick={() => handleCategory("breakfast")}>Breakfast</button>
                    <button className="category" onClick={() => handleCategory("lunch")}>Lunch</button>
                    <button className="category" onClick={() => handleCategory("dinner")}>Dinner</button>
                </div>
                <div className="menu">
                    {handleMenuItems(menuItems)}
                </div>
            </section>
        </div>
    )
}

export default Menu;