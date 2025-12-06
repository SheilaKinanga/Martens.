import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Landing from './Components/landing/landing'
import ProductsCatalogue from './Components/Product Catalogue/Product Catalogue'
import Header from './Components/Header/header'
import NewsandEvents from './Components/NewsandEvents/NewsandEvents'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Landing/>
      <Header/>
      <ProductsCatalogue/>
      <NewsandEvents/>
      </div>
  )
}

export default App

