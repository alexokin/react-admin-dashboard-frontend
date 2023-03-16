import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admins from "./pages/admins/admins";
import Breakdown from "./pages/breakdown/breakdown";
import Customers from "./pages/customers/customers";
import Daily from "./pages/daily/daily";
import Dashboard from "./pages/dashboard/dashboard";
import Geography from "./pages/geography/geography";
import Layout from "./pages/layout/layout";
import Monthly from "./pages/monthly/monthly";
import Overview from "./pages/overview/overview";
import Performance from "./pages/performance/performance";
import Products from "./pages/products/products";
import Transactions from "./pages/transactions/transactions";

import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />}/>
              <Route path="/daily" element={<Daily />}/>
              <Route path="/monthly" element={<Monthly />}/>
              <Route path="/breakdown" element={<Breakdown />}/>
              <Route path="/admin" element={<Admins />}/>
              <Route path="/performance" element={<Performance />}/>

            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
