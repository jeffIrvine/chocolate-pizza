import React, { Component } from 'react'

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
            </div>
        )
    }
}


