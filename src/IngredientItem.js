import React, { Component } from 'react'

export default class IngredientItem extends Component {
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
