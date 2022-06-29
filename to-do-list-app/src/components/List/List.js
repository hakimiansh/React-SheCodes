import Item from '../Item'
import { React, Component } from 'react';
import "./List.css"
export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: props.items
        }
    }

    getItems() {
        this.state.items.map((item, index) => { return (<Item details={item} index={index} />) })
    }

    render() {
        var items = this.state.items.map(item => { return (<Item details={item} />) })

        return (
            <div className="fixed">
            <ul className="list-group"> {items} </ul>
            </div>
        );
    }
}