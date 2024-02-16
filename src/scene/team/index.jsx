import React, { useState } from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Modal from "react-modal";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [member, setMember] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  const handleOpenModal = (member) => {
    setMember(member);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setMember(null);
    setModalIsOpen(false);
  };
  return (
    <Box m="20px">
      <Header title="Team" subtitle="Manage your team members" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: colors.blueAccent[700],
            borderTop: "none",
          },
        }}
      >
        <DataGrid
          onCellClick={(params) => handleOpenModal(params.row)}
          rows={mockDataTeam}
          columns={columns}
        ></DataGrid>
      </Box>
      <Box
        width="300px"
        sx={{
          ml: "40px",
          color: "#000",
        }}
      >
        <Modal
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            content: {
              width: "35%",
              height: "50%",
              margin: "auto",
              color: "#000",
            },
          }}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          {member && (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  marginBottom: "20px",
                }}
              >
                <button onClick={closeModal}>X</button>
              </div>
              <Box display="flex" justifyContent="space-between">
                <Typography>Name: </Typography>
                <Typography variant="h3">{member.name}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography>E-mail: </Typography>
                <Typography variant="h3">{member.email}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography>Age: </Typography>
                <Typography variant="h3">{member.age}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography>Phone: </Typography>
                <Typography variant="h3">{member.phone}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography>Access: </Typography>
                <Typography variant="h3">{member.access}</Typography>
              </Box>
            </div>
          )}
        </Modal>
      </Box>
    </Box>
  );
};

export default Team;
