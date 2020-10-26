import React, { Component } from 'react'
import pizza from './assets/choco-pizza.png'

export default class Image extends Component {
    render() {
        return (
            <div>
                <img src={pizza} alt='pizza' />
            </div>
        )
    }
}
