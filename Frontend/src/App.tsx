import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/LoggedIn/Home'
import Login from './pages/Form/Login'
import Register from './pages/Form/Register'
import LoggedInLayout from './pages/LoggedIn/loggedInLayout'
import ProjectsList from './pages/LoggedIn/projectsList'
import { MockProjectData } from './assets/mockData'
import Password from './pages/Form/ForgotPassword'
import FormLayout from './pages/Form/FormLayout'
import ReportForms from './components/ReportForms/ReportForms'
import ReportDetailedView from './pages/LoggedIn/reportDetailedView'
import ReportList from './pages/LoggedIn/ReportList'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LoggedInLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/survey" element={<ProjectsList projects={MockProjectData} />} />
            <Route path="survey/projectReports" element={<ReportList />} />
            <Route path="survey/projectReports/:id" element={<ReportDetailedView />} />
            <Route path="/ReportForms" element={<ReportForms/>} />

          </Route>
          <Route element={<FormLayout />}>
            <Route path="/validation/login" element={<Login />} />
            <Route path="/validation/register" element={<Register />} />
            <Route path="/validation/password" element={<Password />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;