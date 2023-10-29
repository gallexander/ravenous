import React from 'react';

const b = {
    imageSrc : "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Bordertown",
    state: "NY",
    zipCode: "10101",
    category: "ITALIAN",
    rating: 4.5,
    reviewCount: 90 
};

const Business = (props) => {
    return (
        <div>
            <img src={b.imageSrc} alt="From business" />
            <div>
                <div>{b.name}</div>
                <div>{b.address}</div><div>{b.category}</div>
                <div>{b.city}</div><div>{b.rating}</div>
                <div>{b.state} {b.zipCode}</div><div>{b.reviewCount} reviews</div>
            </div>
        </div>
    );
};

export default Business;