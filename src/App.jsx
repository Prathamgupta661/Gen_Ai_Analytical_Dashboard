import React from 'react';
import QueryDashboard from './components/QueryDashboard';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h3" align="center" gutterBottom>
        Gen AI Analytics Dashboard
      </Typography>
      <QueryDashboard />
    </Container>
  );
}

export default App;
