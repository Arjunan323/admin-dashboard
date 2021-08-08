import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userRows } from "../../data";
import "./userList.css";

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelte = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "User name",
      width: 220,
      editable: true,
      renderCell: (param) => {
        return (
          <div className="userList">
            <img className="userListImg" src={param.row.avatar} alt="" />
            {param.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 220,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      width: 220,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      sortable: false,
      width: 220,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 220,
      renderCell: (param) => {
        return (
          <>
            <Link to={"/user/" + param.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelte(param.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
