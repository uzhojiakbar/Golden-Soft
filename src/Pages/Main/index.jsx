import React from 'react'

import ConnectMe from '../../Components/ConnectMe'
import Counter from '../../Components/counter'
import Footer from '../../Components/footer'
import Header from '../../Components/Header'
import OpenerCategory from '../../Components/OpenerCategory'
import ProductBanner from '../../Components/ProductBanner'
import WhyGoldenService from '../../Components/WhyGoldenService'

const Main = () => {
  return (
    <>
      <Header/>
      <Counter/>
      <WhyGoldenService/>
      <OpenerCategory/>
      <ProductBanner/>
      <ConnectMe/>
      <Footer/>
    </>
  )
}

export default Main