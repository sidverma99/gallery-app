import React from 'react'
import "./footer.css"

function Footer() {
    return (
        <div className='mail'>
            <h1 className="mailTitle">Save Time Save Money</h1>
            <span className="mailDesc">Sign Up and We will send the best deals to you</span>
            <div className="mailInputContainer">
                <input type="text" placeholder='Your Email' />
                <button>Subscribe </button>
            </div>
        </div>
    )
}

export default Footer