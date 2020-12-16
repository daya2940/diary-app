import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const Item =({ index, item, deleteItem, editItem }) => {
        return (
            <li key={index} className="card col-7 mt-3">
            <div className="d-flex justify-content-between">
              <p className="mt-2">{item}</p>
              <div>
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
}

export default Item;