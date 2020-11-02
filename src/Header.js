import React, { Component } from 'react'
import ButtonList from './ButtonList.js';

export default class Header extends Component {
    render() {
        return (
            <div className='header-div'>

                <div className='blog-div'>
                <img src='./assets/logo.png' alt='logo icon' className='header-logo' />
                    <div className='blog-name'>
                        Delicious
                    </div>
                    <div className='blog-caption'>
                        THE BEST FOOD BLOG ON THE WEB
                    </div>
                </div>
                    <ButtonList />

            </div>
        )
    }
}