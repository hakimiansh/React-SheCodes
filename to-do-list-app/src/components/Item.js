import { React, Component } from 'react';
import "./List/List.css"
export default class Item extends Component {
    changeStatus = this.changeStatus.bind(this);
    changeStatus(e) {
        this.props.onChangeStatus(e.target.name)
    }

    render() {
        return (
            <div key={this.props.index} >
                <input type="checkbox" key={this.props.index} name={this.props.index} checked={this.props.details.done} onChange={this.changeStatus} />
                <span className={this.props.details.done ? "done" : ''}>{this.props.details.value}</span>
            </div>
        )
    }
}