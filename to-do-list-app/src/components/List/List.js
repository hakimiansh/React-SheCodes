import Item from '../Item'
import { React, Component } from 'react';
import "./List.css"
export default class List extends Component {

    constructor(props) {
        super(props);
       
    }

    getItems() {
        
        let itemsList=[];
        this.props.items.forEach((item, index) => { itemsList.push( <Item details={item} key={index} index={index} />) })
    return itemsList
    } 

    render() {

        return (
            <div className="fixed">
            <ul className="list-group"> {this.getItems()} </ul>
            </div>
        );
    }
}