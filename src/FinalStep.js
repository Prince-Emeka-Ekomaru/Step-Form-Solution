import React from "react";

function FinalStep(props) {
  return (
    <div>
      <p>Organisation Name: {props.state.name}</p>
      <p>Website: {props.state.website}</p>
      <p>Email: {props.state.email}</p>
      <p>Mobile: {props.state.mobile}</p>
      <p>Address: {props.state.address}</p>
      <p>Social Media Handle: {props.state.socials}</p>
      <p>Brand Color: {props.state.brandColor}</p>
      <p>Attach Logo: {props.state.logo}</p>
      <p>Attach Background Image: {props.state.backgroundImage}</p>
    </div>
  );
}

export default FinalStep;