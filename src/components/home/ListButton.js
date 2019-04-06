import React, {Component} from "react";

const ListButton = ({listButton}) => {
  return (
    <div>
      {listButton.map((item) =>
        <button>{item}</button>
      )}
    </div>
  )
}

export default ListButton
