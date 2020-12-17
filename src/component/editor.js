import React, { useState } from "react";
import Item from "./item";
import moment from "moment";

const Editor = () => {
  const [values, setValue] = useState({
    content: "",
    dailyNotes: [],
    date: [],
  });

  const [show, setShow] = useState({
    add: true,
    update: false,
  });
  const [position, setPosition] = useState(0);
  const { content, dailyNotes, date } = values;
  const { add, update } = show;

  const handleChange = (name) => (e) => {
    setValue({ ...values, [name]: e.target.value });
  };

  const addItem = () => {
    let timing = moment().format("DD-MM-YYYY");
    let upadtedList = [...dailyNotes, content];
    let updatedDate = [...date, timing];
    if (upadtedList.length !== 0 && content !== "") {
      setValue({ dailyNotes: upadtedList, date: updatedDate, content: "" });
    }
  };

  const deleteItem = (index) => {
    let confirmation = window.confirm("Are you sure you want to delete ?");
    if (confirmation) {
      dailyNotes.splice(index, 1);
      setValue({ ...values });
    }
  };

  const updateItem = () => {
    setShow({ add: true, update: false });
    dailyNotes[position] = content;
    setValue({ ...values, content: "" });
  };

  const editItem = (index) => {
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
            <div className="mt-5 ml-3">
              {/* <Filter date={date} notes={dailyNotes} /> */}
            </div>
            {
              <div className="container mt-5">
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
                        time={date[index]}
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
