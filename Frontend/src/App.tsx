import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/LoggedIn/Home'
import Login from './pages/Form/Login'
import Register from './pages/Form/Register'
import LoggedInLayout from './pages/LoggedIn/loggedInLayout'
import ProjectsList from './pages/LoggedIn/projectsList'
import { MockProjectData } from './assets/mockData'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LoggedInLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/survey" element={<ProjectsList projects={MockProjectData} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;