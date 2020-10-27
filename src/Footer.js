import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className='share-button'>
                    <button >SHARE RECIPE</button>
                </div>
                <div className='author-image'>
                    <img src='./assets/van-pic.png' alt='Author Vanessa'/>
                </div>
                <p className='author-name'>
                    Vanessa Stevenson  
                </p>
                <p className='author-bio'>
                    Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.
                </p>

                <div className='footer-logo'>
                    <img src='./assets/small-logo.png' alt='logo'/>
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
