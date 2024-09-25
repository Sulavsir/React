import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Settings from './pages/settings';
import Profile from './pages/profile';
import Documents from './pages/documents';
import Downloads from './pages/downloads';
import Login from './pages/login';
import Register from './pages/register';
import Users from './pages/users';
import Comments from './pages/commentsPage';
import Posts from './pages/Posts';
import AddPosts from './pages/AddPosts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='downloads' element={<Downloads />} />
          <Route path='settings' element={<Settings />} />
          <Route path='documents' element={<Documents />} />
          <Route path='profile' element={<Profile />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='users' element={<Users />} />
          <Route path='comments' element={<Comments />} />
          <Route path='posts' element={<Posts />} />
          <Route path='posts/add' element={<AddPosts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
