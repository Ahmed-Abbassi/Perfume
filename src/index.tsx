import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme/theme';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Error404 from './components/Error404';
import Login from './components/Login';
import Signin from './components/Signin';


const router = createBrowserRouter([
  {
    path :'/', 
    element : <App />,

  },
      {
        path : "login",
        element : <Login />

      }, 
      {
        path :'signin',
        element : <Signin />
      }
     
  
  ,
  {
    path:'*',
    element :<Error404 />
  } 
  
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
          
        </ChakraProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
