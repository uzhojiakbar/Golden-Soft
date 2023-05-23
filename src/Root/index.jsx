import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ConnectMe from '../Components/ConnectMe'
import Counter from '../Components/counter'
import Footer from '../Components/footer'
import Header from '../Components/Header'
import Navbar from '../Components/navbar'
import OpenerCategory from '../Components/OpenerCategory'
import ProductBanner from '../Components/ProductBanner'
import WhyGoldenService from '../Components/WhyGoldenService'
import { pages } from '../Mock/pages'
import './style.css'

const Root = () => {
  return (
    <div className='main' >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Navigate to='/main'/>}/>        
        {pages.map((v)=>{
          return <Route key={v.id} path={v.path} element={v.element}/>
        })}
      </Routes>
    </div>
  )
}

export default Root