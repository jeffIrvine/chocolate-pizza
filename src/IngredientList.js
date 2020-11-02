import React, { Component } from 'react';
import IngredientItem from './IngredientItem.js';

export default class IngredientList extends Component {
    render() {
        return (
            <div>
                <div className='item-list'>
                    <IngredientItem 
                    className='list-one'
                    name=' milk' 
                    amount='1 1/2' />
                    <IngredientItem 
                    name=' mascarpone' 
                    amount='1/2 cup' />
                    <IngredientItem 
                    name=' pink salt' 
                    amount='1/2 tsp' />
                    <IngredientItem 
                    name='Black Mission figs' 
                    amount='1 lb' />
                    <IngredientItem 
                    name=' brown sugar' 
                    amount='1/2 cup' />
                    <IngredientItem 
                    name=' water' 
                    amount='2-4 tbsp' />
                    <IngredientItem 
                    className='list-two'
                    name=' heavy cream' 
                    amount='1 1/2 cups' />
                    <IngredientItem 
                    name=' granulated sugar' 
                    amount='1/3 cup' />
                    <IngredientItem 
                    name='egg yolks' 
                    amount='2' />
                    <IngredientItem 
                    name='lemon, juiced' 
                    amount='1' />
                    <IngredientItem 
                    name=' butter' 
                    amount='2 tbsp' />
                    <IngredientItem 
                    name='honey roasted pecans, roughly chopped' 
                    amount='1 cup' />
                </div>
            </div>
        )
    }
}
