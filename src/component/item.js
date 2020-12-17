import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const Item = ({ index, item, deleteItem, editItem, time }) => {
  return (
    <li key={index} className="card col-sm-12 col-lg-7 col-md-7 mt-5">
      <div className="row m-3">
        <p className="mt-2">{item}</p>
        <p>CreatedAt : {time}</p>
        </div>
        <div>
        <div className="row m-2">
          <button
            className="btn delete-btn"
            key={Math.random()}
            onClick={() => editItem(index)}
            style={{ color: "blue" }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button
            className="btn delete-btn"
            key={Math.random()}
            onClick={() => deleteItem(index)}
            style={{ color: "red" }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Item;
