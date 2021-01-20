import React from 'react';
import "./NavInShorts.css"
import HamburgerDrawer from "./HamburgerDrawer.js"

const NavInShorts = ({setcategory}) => {
    return (
        <div className="nav">
            <div className='icon'><HamburgerDrawer setcategory={setcategory}/></div>
                <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
                style={{cursor: "pointer"}}
                height="80%"
                alt='logo'/>
        </div>
    ) 
}

export default NavInShorts
