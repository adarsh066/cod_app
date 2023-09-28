import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import HeaderComponent from "./components/layouts/HeaderComponent";
import TestListComponent from "./components/test/TestListComponent";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddTestComponent from "./components/test/AddTestComponent";
import { Provider } from "react-redux";
import store from "./store";
import CreateReportComponent from "./components/report/CreateReportComponent";
import ReportListComponent from "./components/report/ReportListComponent";
import UpdateReportComponent from "./components/report/UpdateReportComponent";
import UpdateTestComponent from "./components/test/UpdateTestComponent";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/listTest" element={<TestListComponent />} />
          <Route path="/addTest" element={<AddTestComponent />} />
          <Route path="/updateTest/:id" element={<UpdateTestComponent />} />
          <Route path="/createReport" element={<CreateReportComponent />} />
          <Route path="/Reportlist" element={<ReportListComponent />} />
          <Route path="/updateReport/:id" element={<UpdateReportComponent />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
