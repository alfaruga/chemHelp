import React from "react";

const TableRow = (props) => {
  return (
    <tr>
      <td>{props.atomInfo.count}</td>
      <td>{props.atomInfo.atom}</td>
      <td>{props.atomInfo.am}</td>
      <td>{props.atomInfo.subtotalMass.toFixed(3)}</td>
      <td>
        {((props.atomInfo.subtotalMass * 100) / props.molecularMass).toFixed(2)}
      </td>
    </tr>
  );
};

export default TableRow;
