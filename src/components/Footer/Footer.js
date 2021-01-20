import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <span className="name">
                Inshorts clone made by - Sagar Dhamani
            </span>
            <hr style={{width:"90%"}}/>
            <div className="iconContainer">
                <a href="https://twitter.com/SagarDhamani1" target="__blank">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/sagar-dhamani-a8b066114/" target="__blank">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/sdhamani" target="__blank">
                    <i className="fab fa-github"></i>
                </a>
            </div>
            
        </div>
    )
}

export default Footer
