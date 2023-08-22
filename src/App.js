import React from "react";
import NewTask from "./components/NewTask/NewTask";
import TaskList from "./components/TaskList/TaskList";
import { DataProvider } from "./components/Store/DataProvider";
import { CssBaseline, Container, Typography, Box } from "@mui/material";

function App() {
  return (
    <DataProvider>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box boxShadow={5} p={3} borderRadius={4}>
          <Typography
            variant="h2"
            align="center"
            fontWeight={900}
            color="#666"
            marginBottom={5}
          >
            - To Do List -
          </Typography>
          <NewTask />
          <TaskList />
        </Box>
      </Container>
    </DataProvider>
  );
}

export default App;
