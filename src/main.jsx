import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app.jsx';
//import Error from './components/ErrorPage';
import About from './pages/about.jsx';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact.jsx';
import Resume from './pages/resume.jsx';
//import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('app')).render(
  <RouterProvider router={router} />
);
