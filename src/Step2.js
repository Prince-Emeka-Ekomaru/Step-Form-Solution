import React from "react";

function Step2(props) {
  return (
    <div>
      <p>
        Address:{" "}
        <input
          name="address"
          value={props.getState("address", "")}
          onChange={props.handleChange}
        />
      </p>
      <p>
        Social Media Handles:{" "}
        <input
          name="socials"
          value={props.getState("socials", "")}
          onChange={props.handleChange}
        />
      </p>

      <p>
        Brand Color:{" "}
        <input
          name="brandColor"
          value={props.getState("brandColor", "")}
          onChange={props.handleChange}
        />
      </p>

      <p>
        Attach Logo:{" "}
        <input
          name="logo"
          type='file'
          value={props.getState("logo", "")}
          onChange={props.handleChange}
        />
      </p>

      <p>
        Attach Background Image:{" "}
        <input
          type='file'
          name="backgroundImage"
          value={props.getState("backgroundImage", "")}
          onChange={props.handleChange}
        />
      </p>

      <p>
        <button onClick={props.prev}>Previous</button>
        <button onClick={props.next}>Next</button>
      </p>
    </div>
  );
}

export default Step2;
