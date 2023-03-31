import React, { useState } from "react";
import "./styles/styles.css";
import SortableColumnHeader from "./components/SortableColumnHeader";
import { Link } from "react-router-dom";

function ReportsTable() {
  const [searchTerms, setSearchTerms] = useState({
    reportName: "",
    company: "",
    uploadDate: "",
    subscriberList: "",
    subscriberEmailFreq: "",
    reportRefreshFreq: "",
    dataRefreshFreq: "",
    comments: "",
    newReportName: "",
  });
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const data = [
    {
      id: 1,
      reportName: "TRS_FLR_Inventory_Availability_DW",
      company: "TRS/FLR",
      uploadDate: "2023-03-22",
      url: "https://app.powerbi.com/reportEmbed?reportId=25bf2069-fc95-478c-8a4b-9577fa9ba9ee&autoAuth=true&ctid=e5082643-6166-4ecc-b73f-5fb7c697d999",
      subscriberList: [
        "gmesa@evi-ind.com",
        "jpena@evi-ind.com",
        "fl-jmanzanera@evi-ind.com",
        "gdickson@evi-ind.com",
      ],
      subscriberEmailFreq: "Daily at 6:00 AM EST",
      reportRefreshFreq: "Daily at 1:00 AM EST",
      dataRefreshFreq: "Daily at 8:00 PM EST",
    },
    {
      id: 2,
      reportName: "TRS_FLR_Inventory_Availability_Equipment_DW_v1",
      company: "TRS/FLR",
      uploadDate: "2023-03-22",
      url: "https://app.powerbi.com/reportEmbed?reportId=7e182aff-9b7f-4f76-89b8-ec48bc415a3c&autoAuth=true&ctid=e5082643-6166-4ecc-b73f-5fb7c697d999",
      subscriberList: [
        "gmesa@evi-ind.com",
        "jpena@evi-ind.com",
        "fl-jmanzanera@evi-ind.com",
        "gdickson@evi-ind.com",
      ],
      subscriberEmailFreq: "Daily at 6:00 AM EST",
      reportRefreshFreq: "Daily at 1:00 AM EST",
      dataRefreshFreq: "Daily at 8:00 PM EST",
    },
    {
      id: 3,
      reportName: "CTL_Inventory_Availability_DW_v1",
      company: "CTL",
      uploadDate: "2023-03-22",
      url: "https://app.powerbi.com/reportEmbed?reportId=05cbbb2a-bd98-47d5-977c-3af9c2f4863d&autoAuth=true&ctid=e5082643-6166-4ecc-b73f-5fb7c697d999",
      subscriberList: [
        "gmesa@evi-ind.com",
        "jpena@evi-ind.com",
        "fl-jmanzanera@evi-ind.com",
        "gdickson@evi-ind.com",
      ],
      subscriberEmailFreq: "Daily at 6:00 AM EST",
      reportRefreshFreq: "Daily at 1:00 AM EST",
      dataRefreshFreq: "Daily at 8:30 PM EST",
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
    <div className="m-2 table-responsive">
      <h1>All Live Reports</h1>
      <table className="table table-striped table-bordered table-hover table-sm">
        <thead>
          <tr>
            <SortableColumnHeader
              columnName="Report Name"
              columnNameId="reportName"
              sortColumn={sortColumn}
              sortDirection={sortDirection}
              handleSort={handleSort}
            />
            <SortableColumnHeader
              columnName="Company"
              columnNameId="company"
              sortColumn={sortColumn}
              sortDirection={sortDirection}
              handleSort={handleSort}
            />
            <SortableColumnHeader
              columnName="Upload Date"
              columnNameId="uploadDate"
              sortColumn={sortColumn}
              sortDirection={sortDirection}
              handleSort={handleSort}
            />
            <SortableColumnHeader
              columnName="Subscriber List"
              columnNameId="subscriberList"
              sortColumn={sortColumn}
              sortDirection={sortDirection}
              handleSort={handleSort}
            />
            <SortableColumnHeader
              columnName="Subscriber Email Frequency"
              columnNameId="subscriberEmailFreq"
              sortColumn={sortColumn}
              sortDirection={sortDirection}
              handleSort={handleSort}
            />
            <SortableColumnHeader
              columnName="Report Refresh Frequency"
              columnNameId="reportRefreshFreq"
              sortColumn={sortColumn}
              sortDirection={sortDirection}
              handleSort={handleSort}
            />
            <SortableColumnHeader
              columnName="Data Refresh  Frequency"
              columnNameId="dataRefreshFreq"
              sortColumn={sortColumn}
              sortDirection={sortDirection}
              handleSort={handleSort}
            />
            <SortableColumnHeader
              columnName="Comments"
              columnNameId="comments"
              sortColumn={sortColumn}
              sortDirection={sortDirection}
              handleSort={handleSort}
            />
            <SortableColumnHeader
              columnName="New Report Name"
              columnNameId="newReportName"
              sortColumn={sortColumn}
              sortDirection={sortDirection}
              handleSort={handleSort}
            />
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
            <td>
              <input
                type="text"
                className="form-control"
                name="subscriberList"
                value={searchTerms.subscriberList}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                name="subscriberEmailFreq"
                value={searchTerms.subscriberEmailFreq}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                name="reportRefreshFreq"
                value={searchTerms.reportRefreshFreq}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                name="dataRefreshFreq"
                value={searchTerms.dataRefreshFreq}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                name="comments"
                value={searchTerms.comments}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                name="newReportName"
                value={searchTerms.newReportName}
                onChange={handleChange}
              />
            </td>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>
                {/* <a rel="noopener noreferrer" href={item.url}>
                  {item.reportName}
                </a> */}
                {/* to="/report/{item.url}" state: {fromHome: true} */}
                <Link to={`/report/${encodeURIComponent(item.url)}`}>
                  {item.reportName}
                </Link>
              </td>
              <td>{item.company}</td>
              <td>{item.uploadDate}</td>
              <td>
                {item.subscriberList ? item.subscriberList.join(", ") : ""}
              </td>
              <td>{item.subscriberEmailFreq}</td>
              <td>{item.reportRefreshFreq}</td>
              <td>{item.dataRefreshFreq}</td>
              <td>{item.comments}</td>
              <td>{item.newReportName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ReportsTable;
