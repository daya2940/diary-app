import React, { useState } from "react";
import moment from "moment";

const Filter = ({date,notes}) => {
  console.log(notes,date);

  const [selected,setSelected] = useState('Filter');
  
  const filterBtn = (event) => {
    if (event.target.className.indexOf("filter-item") !== -1) {
      let filterValue = prompt('Enter the required value in numbers');
      console.log(filterValue);
      setSelected(event.target.textContent);
      console.log(selected);
    }
    
    date.map((item) => {
      let check = moment(item, "MM-DD-YYYY");
      let weeknumber = moment(item, "MM-DD-YYYY").week();
      let month = check.format("M");
      let year = check.format("YYYY");
      console.log(weeknumber);
    });
  };

  return (
    <div>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-danger dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {selected}
        </button>
        <ul className="dropdown-menu filter-pointer " onClick={filterBtn}>
          <li className="p-2 filter-item ">Week</li>
          <li className="p-2 filter-item">Month</li>
          <li className="p-2 filter-item">Year</li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;