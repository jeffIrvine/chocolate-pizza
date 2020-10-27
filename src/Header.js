import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div class='header-div'>

                <div class='blog-div'>
                <img src='./assets/logo.png' alt='logo icon' class='header-logo' />
                    <div className='blog-name'>
                        Delicious
                    </div>
                    <div className='blog-caption'>
                        THE BEST FOOD BLOG ON THE WEB
                    </div>
                </div>
                <div className='nav-list'>
                    <a href='https://www.facebook.com'>
                        <img src='./assets/fb-icon.png' alt='logo icon'/>
                    </a>
                    <a href='https://www.twitter.com'>
                        <img src='./assets/twit-icon.png' alt='twitter icon'/>
                    </a>
                    <a href='https://play.google.com'>
                        <img src='./assets/gp-icon.png' alt='google icon'/>
                    </a>
                    <a href='https://www.instagram.com'>
                        <img src='./assets/insta-icon.png' alt='instagram icon'/>
                    </a>
                    <a href='https://www.flickr.com'>
                        <img src='./assets/flic-icon.png' alt='flic icon'/>
                    </a>
                    <a href='https://www.pinterest.com'>
                        <img src='./assets/pint-icon.png' alt='pinterest icon'/>
                    </a>
                    <a href='https://rss.com'>
                        <img src='./assets/rss-icon.png' alt='rss icon'/>
                    </a>
                    <a href='https://www.gmail.com'>
                        <img src='./assets/mail-icon.png' alt='email icon'/>
                    </a>
                </div>
            </div>
        )
    }
}