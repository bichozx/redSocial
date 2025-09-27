import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import PageRedSocial from '../page/PageRedSocial';

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/redsocial" element={<PageRedSocial/>}/>
      </Routes>
    </BrowserRouter>
  );
}