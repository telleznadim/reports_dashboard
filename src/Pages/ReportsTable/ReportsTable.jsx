import React, { useState } from "react";
import "./styles/styles.css";

function ReportsTable() {
  const [searchTerms, setSearchTerms] = useState({
    reportName: "",
    company: "",
    uploadedDate: "",
  });
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const data = [
    {
      id: 1,
      reportName: "TRS_FLR_Inventory_Availability_DW_v1",
      company: "TRS/FLR",
      uploadedDate: "2023-03-22",
      url: "https://app.powerbi.com/reportEmbed?reportId=ae579deb-ea2b-435f-8bf1-bac31f338ba0&autoAuth=true&ctid=e5082643-6166-4ecc-b73f-5fb7c697d999",
    },
    {
      id: 2,
      reportName: "TRS_FLR_Inventory_Availability_Equipment_DW_v1",
      company: "TRS/FLR",
      uploadedDate: "2023-03-22",
      url: "https://app.powerbi.com/reportEmbed?reportId=7e182aff-9b7f-4f76-89b8-ec48bc415a3c&autoAuth=true&ctid=e5082643-6166-4ecc-b73f-5fb7c697d999",
    },
    {
      id: 3,
      reportName: "CTL_Inventory_Availability_DW_v1",
      company: "CTL",
      uploadedDate: "2023-03-22",
      url: "https://app.powerbi.com/reportEmbed?reportId=05cbbb2a-bd98-47d5-977c-3af9c2f4863d&autoAuth=true&ctid=e5082643-6166-4ecc-b73f-5fb7c697d999",
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchTerms({ ...searchTerms, [name]: value });
  };

  const handleSort = (column) => {
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
            <th onClick={() => handleSort("uploadedDate")}>
              Uploaded Date{" "}
              {sortColumn === "uploadedDate" && (
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
                name="uploadedDate"
                value={searchTerms.uploadedDate}
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
              <td>{item.uploadedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ReportsTable;
