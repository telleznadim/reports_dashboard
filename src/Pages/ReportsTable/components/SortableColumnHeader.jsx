import React from "react";

function SortableColumnHeader(props) {
  const { columnName, columnNameId, sortColumn, sortDirection, handleSort } =
    props;

  return (
    <th onClick={() => handleSort(columnNameId)}>
      {columnName}{" "}
      {sortColumn === columnNameId && (
        <i
          className={`bi bi-arrow-${sortDirection === "asc" ? "up" : "down"}`}
        ></i>
      )}
    </th>
  );
}

export default SortableColumnHeader;
