import "./App.css";
import Home from "./pages/Home";
import { GlobalStyle } from "./utils/style";
import { ThemeProvider } from "./utils/context";
import { Toaster } from "./components/ui/toaster";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <ThemeProvider>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
