import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import responsiveSpacing from 'utils/responsive-spacing/responsive-spacing';

export default function LOADING_SPINNER() {
  return (
    <Box sx={{ marginTop: responsiveSpacing(5), display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  );
}