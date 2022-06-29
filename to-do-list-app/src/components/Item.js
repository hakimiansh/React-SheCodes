import { React, Component } from 'react';
export default class Item extends Component {

    changeStatus() {

    }

    render() {
        console.log(this.props);
        return (
            <div>
                <input type="checkbox" checked={this.props.details.done} onChange={this.changeStatus} />
                {this.props.details.value}
            </div>
        )
    }
}