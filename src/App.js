import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Layout/Main';
import Header from './components/Header/Header';
import Error from './components/Error/Error';
import BigGallery from './components/Gallery/BigGallery';
import Pricing from './components/Pricing/Pricing'
import Blog from './components/Blog/Blog'
import About from './components/About/About';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { ToastContainer } from 'react-toastify';
import CheckOut from './components/Checkout/Checkout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {

const router=  createBrowserRouter([

  {
    path:'/',
    element: <Main></Main>,
    children:[
      {path:'/', element:<Header></Header>},
      {path:'/home', element:<Header></Header>},
      {path:'/bigallery' ,element:<BigGallery></BigGallery> },
      {path:'/pricing', element:<PrivateRoute><Pricing></Pricing></PrivateRoute> },
      {path:'/blog', element:<Blog></Blog>},
      {path:'/about', element:<About></About>},
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/checkout',
        element: <CheckOut></CheckOut>
      },
      {path:'*', element: <Error></Error>},
    ]
  }

  ])



  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}
export default App;
