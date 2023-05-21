import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

const Services = () => {
  return (
    <Box sx={{ bgcolor: '#fff', pt: 8, pb: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 4 }}>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: '#f1cf3d',
                p: 4,
                borderRadius: 4,
                boxShadow: 4,
                height: '100%'
              }}
            >
              <Typography variant="h4" sx={{ mb: 2 }}>
                Service 1
              </Typography>
              <Typography variant="body1" align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor
                euismod massa, ac euismod elit fringilla sit amet.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: '#7c0c10',
                p: 4,
                borderRadius: 4,
                boxShadow: 4,
                height: '100%'
              }}
            >
              <Typography variant="h4" sx={{ mb: 2, color: '#fff' }}>
                Service 2
              </Typography>
              <Typography variant="body1" align="center" sx={{ color: '#fff' }}>
                Ut euismod justo risus, vel ultricies nisl lobortis eu. Nunc porta
                est id consequat tincidunt.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: '#f1cf3d',
                p: 4,
                borderRadius: 4,
                boxShadow: 4,
                height: '100%'
              }}
            >
              <Typography variant="h4" sx={{ mb: 2 }}>
                Service 3
              </Typography>
              <Typography variant="body1" align="center">
                Fusce porttitor posuere enim, eget eleifend mi maximus vel.
                Suspendisse ut velit eget augue posuere tincidunt.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
