import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Button from "./components/Button";
import "./styles/styles.css";

const Grid = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const buttons = [
    {
      id: 1,
      name: "TRS_FLR_Inventory_Availability_DW_v1",
      url: "https://app.powerbi.com/reportEmbed?reportId=ae579deb-ea2b-435f-8bf1-bac31f338ba0&autoAuth=true&ctid=e5082643-6166-4ecc-b73f-5fb7c697d999",
    },
    {
      id: 2,
      name: "TRS_FLR_Inventory_Availability_Equipment_DW_v1",
      url: "https://app.powerbi.com/reportEmbed?reportId=7e182aff-9b7f-4f76-89b8-ec48bc415a3c&autoAuth=true&ctid=e5082643-6166-4ecc-b73f-5fb7c697d999",
    },
  ];

  const filteredButtons = buttons.filter((button) =>
    button.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Company name</h2>
      <SearchBar handleSearch={handleSearch} />
      <div className="row">
        {filteredButtons.map((button) => (
          <div key={button.id} className="col-4">
            <Button name={button.name} url={button.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
