import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "quote_id", headerName: "ID" },
  { field: "quote", headerName: "Quote", width: 1000 },
  { field: "author", headerName: "Author", width: 200 },
];

const DataTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/quotes")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  console.log(tableData);

  return (
    <div style={{ height: 650, width: "100%" }}>
      <nav>
        <button>Get Random Quotes</button>
      </nav>
      <DataGrid
        rows={tableData}
        columns={columns}
        getRowId={(row) => row.quote_id}
        pageSize={10}
      />
    </div>
  );
};

export default DataTable;
