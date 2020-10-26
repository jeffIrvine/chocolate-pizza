import React, { Component } from 'react'
import logo from './assets/logo.png';
import fbNav from './assets/fb-icon.png';
import flicNav from './assets/flic-icon.png';
import googleNav from './assets/gp-icon.png';
import instaNav from './assets/insta-icon.png';
import mailNav from './assets/mail-icon.png';
import rssNav from './assets/rss-icon.png';
import twitterNav from './assets/twit-icon.png';
import pintNav from './assets/pint-icon.png';

export default class Header extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt='logo icon'/>
                <div className=''>
                    Delicious
                </div>
                <div className=''>
                    THE BEST FOOD BLOG ON THE WEB
                </div>
                <div className='nav-list'>
                <img src={fbNav} alt='logo icon'/>
                <img src={twitterNav} alt='twitter icon'/>
                <img src={googleNav} alt='google icon'/>
                <img src={instaNav} alt='instagram icon'/>
                <img src={flicNav} alt='flic icon'/>
                <img src={pintNav} alt='pintrest icon'/>
                <img src={rssNav} alt='rss icon'/>
                <img src={mailNav} alt='email icon'/>
                </div>
            </div>
        )
    }
}
