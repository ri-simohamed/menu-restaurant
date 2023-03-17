import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import './App.scss'
import Category from './components/Category/Category'
import Carts from './components/Carts/Carts'
import { foodData } from './data'

const App = () => {

  const [dataItems, setDataItems] = useState(foodData);

  const allCategory = ['All', ...new Set(foodData.map((ctgy) => ctgy.category))];

  /* filter by catygory */

  const filterCategory = (cty) => {
      if (cty === "All") {
        setDataItems(foodData);
      }
      else {
        const newcty = foodData.filter((item) => item.category === cty);
        setDataItems(newcty);
      }
  }

  return (
    <div className='app'>
        <Navbar/>
        <div className='content'>
        <Header/>
        <Category filterCategory={filterCategory} allCategory={allCategory}/>
        <Carts dataItem={dataItems}/>
        </div>
    </div>
  )
}

export default App