import React from "react";
import TableRow from "../TableRow/TableRow";
import styles from "./Table.module.css";

const Table = ({ tableData, molecularMass }) => {
  return (
    <div className={styles.container}>
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
          <TableRow  atomInfo={atomInfo} molecularMass={molecularMass}/>
        );
      })}
      <tr className={styles.molarMassRow}>
        <td colSpan={4}>Total mass</td>
        <td>{molecularMass.toFixed(2)}</td>
      </tr>
    </table>
    </div>
  );
};

export default Table;
