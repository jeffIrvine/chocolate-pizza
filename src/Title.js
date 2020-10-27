import React, { Component } from 'react'
import print from './assets/print-icon.png';

export default class Title extends Component {
    render() {
        return (
            <div className='title-div'>
                <div className='left-title-div'>
                    <div className='title-text'>
                        Chocolate Pizza
                    </div>
                    <div className='subtitle-text'>
                        POSTED ON 15 DEC 2013/DESSERTS
                    </div>
                </div>
                <div className="print-div">
                    <img src={print} alt='print icon' />
                    PRINT
                </div>
            </div>
        )
    }
}
