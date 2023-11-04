import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <img
        src="alangasi1.jpg" 
        alt="background"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          opacity: 0.3
        }}
      />
      <div style={{ minHeight: '100vh' }}>
        <Router>
          <CssBaseline />
          <Layout />
        </Router>
      </div>
    </div>
  );
}

export default App;
