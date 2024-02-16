import React from 'react';
import { Box } from '@mui/material';
import Header from '../../components/Header';
import GeographyChart from '../../components/GeographyChart';
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';

const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
        <Header title="Geography chart" subtitle="Simple geography chart" />
        <Box 
            height="75vh" 
            border={`1px solid ${colors.grey[100]}`}
            borderRadius="4px"
            marginTop="20px"
        >
            <GeographyChart />
        </Box>
    </Box>
  )
}

export default Geography