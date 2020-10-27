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
                    {/* <p>
                        <input type='checkbox' />
                        <label className='strikethrough'> 1/2 cup mascarpone</label>
                    </p>
                    <p>
                        <input type='checkbox' />
                        <label className='strikethrough'> 1/2 tsp pink salt</label>
                    </p>
                    <p>
                        <input type='checkbox' />
                        <label className='strikethrough'>1lb Black Mission figs</label>
                    </p>
                    <p>
                        <input type='checkbox' />
                        <label className='strikethrough'>1/2 cup brown sugar</label>
                    </p>
                    <p>
                        <input type='checkbox' />
                        <label className='strikethrough' >2-4 tbsp water</label>
                    </p> */}
                </div>
                {/* <div className='list-two'>
                    <p>
                        <input type='checkbox' />
                        <label className='strikethrough'>1 1/2 cups heavy cream</label>
                    </p>
                    <p>
                        <input type='checkbox' />
                        <label className='strikethrough'>1/3 cup granulated sugar</label>
                    </p>
                    <p>
                        <input type='checkbox' />
                        <label className='strikethrough'>2 egg yolks</label>
                    </p>
                    <p>
                        <input type='checkbox' />
                        <label className='strikethrough'>1 lemon, juiced</label>
                    </p>
                    <p>
                        <input type='checkbox' />
                        <label className='strikethrough'>2 tbsp butter</label>
                    </p>
                    <p>
                        <input type='checkbox' />
                        <label className='strikethrough'>1 cup honey roasted pecans, roughly chopped</label>
                    </p>
                </div> */}
            </div>
        )
    }
}


