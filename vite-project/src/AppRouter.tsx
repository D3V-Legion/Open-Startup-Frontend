import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from "./routes";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";

const AppRouter:React.FC = () => {
  return (
    <Router>
      <Navbar/>
        <Routes>
          {
            routes.map((route,index)=>(
              <Route key={index} path={route.path} element={
                <React.Suspense fallback={<div>Loading...</div>}>
                   {React.createElement(React.lazy(route.element))}
                </React.Suspense>
              }/>
            ))
        }
        </Routes>
        <Footer/>
    </Router>
  )
}

export default AppRouter