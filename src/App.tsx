import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  Switch,
  FormControlLabel,
  Paper,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import CategoryMultiAccordion from "./components/CategoryMultiAccordion";
import { sampleData } from "./data/sampleData";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  const [isAllExpanded, setIsAllExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsAllExpanded(!isAllExpanded);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Recursive Accordion POC
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={isAllExpanded}
                  onChange={handleToggleExpand}
                  color="secondary"
                />
              }
              label="Expand All"
            />
          </Toolbar>
        </AppBar>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Recursive Accordion Component Demo
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            This demonstrates a recursive accordion component that can handle
            deeply nested data structures. Click on the accordion items to
            expand/collapse them, or use the "Expand All" toggle.
          </Typography>

          <Box sx={{ mt: 3 }}>
            <CategoryMultiAccordion
              item={sampleData}
              contentPath="content"
              isAllExpanded={isAllExpanded}
            />
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
