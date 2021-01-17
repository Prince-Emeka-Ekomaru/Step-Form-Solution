import React from "react";

function Step1(props) {
  return (
    <div>
      <p>
        Organisation Name:{" "}
        <input
          name="name"
          value={props.getState("name", "")}
          onChange={props.handleChange}
        />
      </p>

      <p>
        Email:{" "}
        <input
          name="email"
          value={props.getState("email", "")}
          onChange={props.handleChange}
        />
      </p>

      <p>
        Mobile:{" "}
        <input
          name="mobile"
          value={props.getState("mobile", "")}
          onChange={props.handleChange}
        />
      </p>

      <p>
        Website:{" "}
        <input
          name="website"
          value={props.getState("website", "")}
          onChange={props.handleChange}
        />
      </p>
      <p>
        <button disabled={props.isFirst()} onClick={props.prev}>
          Previous
        </button>
        <button disabled={props.isLast()} onClick={props.next}>
          Next
        </button>
      </p>
    </div>
  );
}

export default Step1;
