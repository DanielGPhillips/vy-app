import { BrowserRouter as Router } from 'react-router-dom';

import Routing from './utils/Routing';
import LSidebar from './components/LSidebar';
import RSidebar from './components/RSidebar';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <Router>
      <Box minHeight="100vh" minWidth="100vw" display="flex" alignItems="top" justifyContent="center" padding={4}>
        <Grid container direction="row" spacing={2}>
          <Grid item md={2}>
            <LSidebar />
          </Grid>
          <Grid item md={8}>
            <Routing />
          </Grid>
          <Grid Item md={2}>
            <RSidebar />
          </Grid>
        </Grid>
      </Box>
    </Router>
  );
}

export default App;
