import React, { useState } from "react";
import "./styles/styles.css";

function ReportsTable() {
  const [searchTerms, setSearchTerms] = useState({
    reportName: "",
    company: "",
    uploadDate: "",
  });
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const data = [
    {
      id: 1,
      reportName: "TRS_FLR_Inventory_Availability_DW_v1",
      company: "TRS/FLR",
      uploadDate: "2023-03-22",
      url: "https://app.powerbi.com/reportEmbed?reportId=ae579deb-ea2b-435f-8bf1-bac31f338ba0&autoAuth=true&ctid=e5082643-6166-4ecc-b73f-5fb7c697d999",
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchTerms({ ...searchTerms, [name]: value });
  };

  const handleSort = (column) => {
    console.log("handleSort");
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const filterData = (data) => {
    const filtered = data.filter((item) =>
      Object.keys(searchTerms).every(
        (key) =>
          searchTerms[key] === "" ||
          (typeof item[key] === "string" &&
            item[key].toLowerCase().includes(searchTerms[key].toLowerCase())) ||
          (typeof item[key] === "number" &&
            item[key]
              .toString()
              .toLowerCase()
              .includes(searchTerms[key].toLowerCase()))
      )
    );

    if (sortColumn) {
      filtered.sort((a, b) => {
        const aValue = a[sortColumn];
        const bValue = b[sortColumn];
        if (typeof aValue === "string" && typeof bValue === "string") {
          return sortDirection === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        } else {
          return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
        }
      });
    }

    return filtered;
  };

  const filteredData = filterData(data);

  return (
    <div>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th onClick={() => handleSort("reportName")}>
              Report Name{" "}
              {sortColumn === "reportName" && (
                <i
                  className={`bi bi-arrow-${
                    sortDirection === "asc" ? "up" : "down"
                  }`}
                ></i>
              )}
            </th>
            <th onClick={() => handleSort("company")}>
              Company{" "}
              {sortColumn === "company" && (
                <i
                  className={`bi bi-arrow-${
                    sortDirection === "asc" ? "up" : "down"
                  }`}
                ></i>
              )}
            </th>
            <th onClick={() => handleSort("uploadDate")}>
              Upload Date{" "}
              {sortColumn === "uploadDate" && (
                <i
                  className={`bi bi-arrow-${
                    sortDirection === "asc" ? "up" : "down"
                  }`}
                ></i>
              )}
            </th>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                className="form-control"
                name="reportName"
                value={searchTerms.reportName}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                name="company"
                value={searchTerms.company}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                name="uploadDate"
                value={searchTerms.uploadDate}
                onChange={handleChange}
              />
            </td>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>
                <a rel="noopener noreferrer" href={item.url}>
                  {item.reportName}
                </a>
              </td>
              <td>{item.company}</td>
              <td>{item.uploadDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ReportsTable;
