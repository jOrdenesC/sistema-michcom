import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Calendar from './pages/calendar';
// import image from './assets/404.svg'
import Administration from './pages/administration';
import Billing from './pages/billing';
import Dashboard from './pages/dashboard';
import NotFound from './pages/not_found';
import Providers from './pages/providers';
import Plans from './pages/plans';
import Users from './pages/users';
import Services from './pages/services';
import Clients from './pages/clients';
import DailyActivity from './pages/daily_activity';
import Employees from './pages/employees';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/services" element={<Services  />} />
          <Route path="/users" element={<Users />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/providers" element={<Providers />} />
          <Route path="/dailyActivity" element={<DailyActivity />} />
          <Route path="/employees" element={<Employees />} />


          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <NotFound />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
