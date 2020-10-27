import React, { Component } from 'react'



export class NotePadImage extends Component {
    render() {
        return (
            <div className='ingredients'>
            <img src='./assets/list-bg.png' alt='note pad'/>
            </div>
        )
    }
}


export default class NotePad extends Component {
    render() {
        return (
            <div className='list-style'>

                <div className='list-one'>
                    <p>
                        <input type='checkbox' />
                        <label className='strikethrough'>{this.props.amount}{this.props.name}</label>
                    </p>
                </div>
            </div>
        )
    }
}


