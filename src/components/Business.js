import React from "react";

const Business = (props) => {
  return (
    <div>
      <img src={props.business.imageSrc} alt="From business" />
      <div>
        <div>{props.business.name}</div>
        <div>{props.business.address}</div>
        <div>{props.business.category}</div>
        <div>{props.business.city}</div>
        <div>{props.business.rating}</div>
        <div>
          {props.business.state} {props.business.zipCode}
        </div>
        <div>{props.business.reviewCount} reviews</div>
      </div>
    </div>
  );
};

export default Business;
