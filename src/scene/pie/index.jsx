import React from 'react';
import { Box } from '@mui/material';
import Header from '../../components/Header';
import PieChart from '../../components/PieChart';

const index = () => {
  return (
    <Box 
        m="20px"
    >
        <Header title="Pie chart" subtitle="Pie chart statistic" />
        <Box height="75vh">
            <PieChart />
        </Box>
    </Box>
  )
}

export default index