import React from 'react';
import Business from './Business';

const listItems = (businesses) => {
    return businesses.map((business) => <Business value={business}/>);
}

const BusinessList = (props) => {
    return (
        <div>{listItems(props.businesses)}</div>
    )
};

export default BusinessList;