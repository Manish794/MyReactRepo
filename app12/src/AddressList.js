import React from 'react';
import Address from './Address';

class AddressList extends React.Component {
    render() {
        return (
            <table className='table table-primary'>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Aid</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>Pin</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.addresses.map
                            (
                                (address) =>
                                (<Address address={address}/>)
                            )}
                </tbody>
            </table>
        );
    }
}

export default AddressList;