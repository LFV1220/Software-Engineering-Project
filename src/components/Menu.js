import React from 'react';

function Menu({ isSignedIn }) {
    return (
        <div>
            {isSignedIn
                ? <p>Signed In</p>
                : <p>Not signed in</p>}
            <p>Test (from MENU component) {isSignedIn}</p>
        </div>
    )
}

export default Menu;