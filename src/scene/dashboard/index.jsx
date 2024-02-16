import React from 'react'
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m='20px'>
      {/* HEADER */}
      <Box 
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />
      
        {/* BUTTON */}
          <Box>
            <Button
              sx={{ backgroundColor: colors.blueAccent[700], color: colors.grey[100], fontSize: "14px", fontWeight: "bold", padding: "10px 20px"}}
            >
              <DownloadOutlinedIcon sx={{ mr: "10px"}} />
              Download reports
            </Button>
          </Box>
      </Box>
      {/* CARDS & GRID*/}
      <Box 
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        mt="20px"
      >
        {/* ROW 1 */}
        <Box 
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox 
            title="14, 409"
            subtitle="Email sent"
            increase="+15%"
            progress="0.75"
            icon={
              <EmailIcon sx={{ color: colors.greenAccent[600], fontSize: "26px"}} />
            }
          />
        </Box>

        <Box 
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox 
            title="14,200,409"
            subtitle="Traffic unbouned"
            increase="+45%"
            progress="0.45"
            icon={
              <TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: "26px"}} />
            }
          />
        </Box>

        <Box 
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox 
            title="344, 409"
            subtitle="Sales obtained"
            increase="+21%"
            progress="0.5"
            icon={
              <PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: "26px"}} />
            }
          />
        </Box>

        <Box 
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox 
            title="1004, 409"
            subtitle="New clients"
            increase="+5%"
            progress="0.25"
            icon={
              <PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: "26px"}} />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}

        >
          <Box
            mt="20px"
            padding="0 30px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography 
                variant='h5'
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue generated
              </Typography>
              <Typography
                variant='h5'
                fontWeight="500"
                color={colors.greenAccent[500]}
              >
                $59,345.00
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlinedIcon sx={{ fontSize: "26px", color: colors.greenAccent[500]}}/>
              </IconButton>
            </Box>
          </Box>

          <Box height="250px" ml="-20px">
            <LineChart isDashboard={true}/>
          </Box>

      
        </Box>
        {/* Transaction */}
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto">
            <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} p="15px" color={colors.grey[100]}>
              <Typography variant='h5' color={colors.grey[100]} fontWeight="600">
                Recent Transactions
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box>
                  <Typography variant='h5' color={colors.greenAccent[500]} fontWeight="600">
                      {transaction.txId}
                  </Typography>
                  <Typography  color={colors.grey[100]}>
                     {transaction.user}
                  </Typography>
                </Box>
                <Box>
                  <Typography color={colors.grey[100]}>{transaction.date}</Typography>
                </Box>
                <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
                  ${transaction.cost}
                </Box>
              </Box>
            ))}
        </Box>

        {/* Row 3 */}
        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard