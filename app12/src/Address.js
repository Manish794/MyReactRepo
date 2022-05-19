import React from 'react';

class Address extends React.Component {
    render() {
        return (
            <tr key={this.props.address.aid}>
                <td>{this.props.address.type}</td>
                <td>{this.props.address.aid}</td>
                <td>{this.props.address.street}</td>
                <td>{this.props.address.city}</td>
                <td>{this.props.address.pin}</td>
            </tr>
        );
    }
}

export default Address;