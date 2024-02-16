import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scene/global/Topbar";
import { Routes, Route } from "react-router-dom";
import Dashboard from './scene/dashboard';
import Sidebar from './scene/global/Sidebar';
import Team from './scene/team';
import Invoices from './scene/invoices';
import Contact from './scene/contacts';
import Form from "./scene/forms";
import FAQ from './scene/faq';
import Bar from './scene/bar';
import Pie from './scene/pie';
import Line from './scene/line';
import Geography from './scene/geography';
import Calendar from './scene/calendar';


function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
      
    </ColorModeContext.Provider>
    
  );
}

export default App;
