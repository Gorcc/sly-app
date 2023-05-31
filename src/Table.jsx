import React from "react";
import teamsly from "./images/teamsly.png";

const Table = (props) => {
  return (
    <div>
      <table className="table">
        <tr>
          <th>{props.race}</th>
          <td rowspan="3">
            <ul>
              <li>{props.first} </li>
              <li>{props.second}</li>
              <li>{props.third}</li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
