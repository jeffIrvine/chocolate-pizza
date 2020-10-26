import React, { Component } from 'react'
import vanPic from './assets/van-pic.png'
import logo from './assets/small-logo.png'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className='author-image'>
                    <img src={vanPic} alt='Author Vanessa'/>
                </div>
                <p className='author-name'>
                    Vanessa Stevenson  
                </p>
                <p className='author-bio'>
                    Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.
                </p>
                <button className='share-button'>SHARE RECIPE</button>
                <div className='footer-logo'>
                    <img src={logo} alt='logo'/>
                </div>
                <div className='final-text'>
                    <div>
                        Delicious &copy; 2013 &middot; All Rights Reserved.
                    </div>
                    <div>
                        Proudly published with Ghost.
                    </div>
                </div>
            </div>
        )
    }
}
