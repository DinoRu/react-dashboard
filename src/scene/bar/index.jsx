import React from 'react';
import { Box } from '@mui/material';
import Header from '../../components/Header';
import BarChart from '../../components/BarChart';

const index = () => {
  return (
    <Box m="20px">
        <Header title="Bar Chart" subtitle="See Bar statistics" />
        <Box height="75vh">
            <BarChart />
        </Box>
    </Box>
  )
}

export default index