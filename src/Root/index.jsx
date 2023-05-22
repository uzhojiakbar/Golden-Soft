import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Counter from '../Components/counter'
import Header from '../Components/Header'
import Navbar from '../Components/navbar'
import WhyGoldenService from '../Components/WhyGoldenService'
import { pages } from '../Mock/pages'
import './style.css'

const Root = () => {
  return (
    <div className='main' >
      <Navbar/>
      <Header/>
      <Counter/>
      <WhyGoldenService/>
      <Routes>
        {/* <Route path='/main' element={v.element} /> */}
        {pages.map((v)=>{
          return <Route path={v.path} element={v.element}/>
        })}
      </Routes>
    </div>
  )
}

export default Root