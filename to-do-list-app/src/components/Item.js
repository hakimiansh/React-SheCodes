import { React, Component } from 'react';
export default class Item extends Component {

    changeStatus() {

    }

    render() {
        return (
            <div key={this.props.index} >
                <input type="checkbox" key={this.props.index} checked={this.props.details.done} onChange={this.changeStatus} />
                <span >{this.props.details.value}</span>
            </div>
        )
    }
}