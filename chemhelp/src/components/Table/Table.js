import React from "react";

import styles from "./Table.module.css";

const Table = ({ tableData, molecularMass }) => {
  return (
    <table className={styles.table}>
      <tr>
        <th># Atoms</th>
        <th>Element</th>
        <th>Atomic mass (g/mol)</th>
        <th>Subtotal mass (g/mol)</th>
        <th>Percent mass (%)</th>
      </tr>
      {tableData.map((atomInfo) => {
        return (
          <tr>
            <td>{atomInfo.count}</td>
            <td>{atomInfo.atom}</td>
            <td>{atomInfo.am}</td>
            <td>{atomInfo.subtotalMass}</td>
            <td>Empty on purpose %Mass</td>
          </tr>
        );
      })}
    </table>
  );
};

export default Table;
