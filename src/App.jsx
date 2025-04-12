import React from "react";
import './App.css'
import Header from './Components/Header';
import Body from './Components/Body';
import { createBrowserRouter, Outlet } from "react-router";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurantDetails from "./Components/RestaurantDetails";
import {RestaurantDetailsError} from './Components/Error';

function App(){
  return (
    <>
  <Header/>
  <Outlet/>
  </>
  )
}

export const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement: <Error/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/restaurant/:resId',
        element:<RestaurantDetails/>,
        errorElement:<RestaurantDetailsError/>
      }
    ]
  }
])

export default App