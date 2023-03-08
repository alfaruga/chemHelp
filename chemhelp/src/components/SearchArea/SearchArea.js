import React from "react";

const SearchArea = (props) => {
  return (
    <form onSubmit={props.submitHandler}>
      <input
        type={"text"}
        value={props.compound}
        onChange={props.inputHandler}
      ></input>
      <button>Calcualte</button>
    </form>
  );
};

export default SearchArea;
