import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Home from './pages/LoggedIn/Home';
import Login from './pages/Form/Login';
import Register from './pages/Form/Register';
import LoggedInLayout from './pages/LoggedIn/loggedInLayout';
import FormLayout from './pages/Form/FormLayout';
import Password from './pages/Form/ForgotPassword';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoggedInLayout />}>
            <Route index element={<Home />} /> 
            <Route path="survey" element={<Home />} />
          </Route>
          <Route path="/" element={<FormLayout />}>
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