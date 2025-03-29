import React from 'react';
import QueryDashboard from './components/QueryDashboard';
import { Container, Typography, Box, Link } from '@mui/material';

function App() {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h3" align="center" gutterBottom>
        Gen AI Analytics Dashboard
      </Typography>
      <QueryDashboard />
      <Box mt={4} textAlign="center">
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} Pratham Gupta. All rights reserved.{' '}
          <Link href="https://github.com/Prathamgupta661/Gen_Ai_Analytical_Dashboard" target="_blank" rel="noopener">
            GitHub Repository
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
