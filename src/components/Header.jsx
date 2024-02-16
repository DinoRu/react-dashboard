import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import { tokens } from '../theme';

const Header = ({ title, subtitle }) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box>
        <Typography 
            variant='h2'
            color={colors.grey[100]}
            sx={{ mr: '5px'}}
        >
            { title }
        </Typography>
        <Typography
            variant='h5'
            color={colors.greenAccent[400]}
            sx={{ }}
        >
            { subtitle }
        </Typography>
    </Box>
  )
}

export default Header