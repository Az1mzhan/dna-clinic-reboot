import { router } from "./Routes";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Navbar } from "./layout/navbar/Navbar";
import { Box } from "@mui/material";
import { Footer } from "./layout/footer/Footer";

function App() {
  return (
    <>
      <Box className="app-container">
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </Box>
    </>
  );
}

export default App;
