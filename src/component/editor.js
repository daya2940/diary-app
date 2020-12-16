import React, { useState } from "react";
import Item from "./item";

const Editor = () => {
  const [values, setValue] = useState({
    content: "",
    dailyNotes: [],
  });

  const [show, setShow] = useState({
    add: true,
    update: false,
  });
  const [position, setPosition] = useState(0);
  const { content, dailyNotes } = values;
  const { add, update } = show;

  const handleChange = (name) => (e) => {
    setValue({ ...values, [name]: e.target.value });
  };

  const addItem = () => {
    let upadtedList = [...dailyNotes, content];
    if (upadtedList.length !== 0 && content !== "") {
      setValue({ dailyNotes: upadtedList, content: "" });
    }
  };

  const deleteItem = (index) => {
    let confirmation = window.confirm("Do you want to delete");
    if (confirmation) {
      dailyNotes.splice(index, 1);
      setValue({ ...values });
    }
  };

  const updateItem = () => {
    setShow({ add: true, update: false });
    dailyNotes[position] = content;
    setValue({...values,content:''});
  };

  const editItem = (index) => {
    console.log(index);
    setPosition(index);
    console.log(dailyNotes[index]);
    setValue({ ...values, content: dailyNotes[index] });
    setShow({ add: false, update: true });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 py-5">
            <div className="form-floating">
              <textarea
                className="form-control editor"
                placeholder="Write notes"
                id="floatingTextarea"
                value={values.content}
                onChange={handleChange("content")}
              ></textarea>
              <div className="py-2">
                {add && (
                  <button className="btn btn-danger btn-lg" onClick={addItem}>
                    ADD
                  </button>
                )}
                {update && (
                  <button
                    className="btn btn-danger btn-lg"
                    onClick={updateItem}
                  >
                    Update
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {
              <div className="container mt-3">
                <ul
                  className="row"
                  style={{ maxHeight: "800px", overflowY: "scroll" }}
                >
                  {dailyNotes &&
                    dailyNotes.map((item, index) => (
                      <Item
                        key={index}
                        item={item}
                        index={index}
                        deleteItem={deleteItem}
                        editItem={editItem}
                      />
                    ))}
                </ul>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
