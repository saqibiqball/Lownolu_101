import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Settings from "./scenes/settings/settings";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { Box } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useLocation } from "react-router-dom";
import { menu } from "./menu";
import CustomerManagement from "./scenes/CustomerManagement/CustomerManagement";
import BusinessManagement from "./scenes/BusinessManagement/BusinessManagemnet";
import MembershipPlan from "./scenes/managementPlan/managementPlan";
import Divider from "@mui/material/Divider";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [headerTitle, setHeaderTitle] = useState("");
  let location = useLocation();
  useEffect(() => {
    menu.map((menuList) => {
      if (location.pathname === menuList.to) setHeaderTitle(menuList.name);
    });
  }, [location.pathname]);

  return (
    // <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Topbar setIsSidebar={setIsSidebar} />
      <div className="app">
        <Sidebar isSidebar={isSidebar} />
        <Box sx={{ flexGrow: 1, flexDirection: "column" }}>
          <Header title={headerTitle} />
          
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
              <Route
                path="/customermanagement"
                element={<CustomerManagement />}
              />
              <Route
                path="/businessmanagement"
                element={<BusinessManagement />}
              />
              <Route path="/membershipPlan" element={<MembershipPlan />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
          <Footer />
        </Box>
      </div>
    </ThemeProvider>
    // </ColorModeContext.Provider>
  );
}

export default App;
