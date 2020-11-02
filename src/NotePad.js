import React, { Component } from 'react'

<<<<<<< HEAD
export default class NotePad extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className='notepad-image'>
                        <p>
                            <input type='checkbox' />
                            <label className='strikethrough'>{this.props.amount}{this.props.name}</label>
                        </p>
                    </div>
                </div>
=======


export class NotePad extends Component {
    render() {
        return (
            <div className='ingredients'>
            <img src='./assets/list-bg.png' alt='note pad'/>
>>>>>>> 221a151d64e2ba959c539acaefcc64f42ca36714
            </div>
        )
    }
}


