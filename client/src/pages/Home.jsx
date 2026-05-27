import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <Container maxWidth="md">
      <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <Paper sx={{ p: 4, width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Welcome, {user?.name}
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            You are logged in successfully.
          </Typography>

          <Button variant="contained" color="error" onClick={logout}>
            Logout
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default Home;