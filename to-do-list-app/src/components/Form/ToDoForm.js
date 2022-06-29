import Item from '../Item'
import { React, Component } from 'react';
import "./ToDoForm.css"
export default class ToDoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item:{
                title:"",
                index:0,
                isDone:false
            }
        }
    }
    saveItem(){
        this.props(this.state.item)
    }

    handleChange(e) {
     let {value,name}=e.target;
    }

    render() {
       

        return (
            <div className="toDoForm">
            <form>
                <input type="text" name="newItem" value="" placeholder='add new item' onChange={this.handleChange}/>
                <button onClick={this.saveItem}> add item</button>
            </form>
            </div>
        );
    }
}