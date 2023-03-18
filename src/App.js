import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import './App.scss'
import Category from './components/Category/Category'
import Carts from './components/Carts/Carts'
import { foodData } from './data'

const App = () => {

  const [dataItems, setDataItems] = useState(foodData);

  const allCategory = ['All', ...new Set(foodData.map((cty) => cty.category))];

  /* filter by catygory */

  const filterCategory = (cty) => {
      if (cty === 'All') {
        setDataItems(foodData);
      }
      else {
        const newArray = foodData.filter((item) => item.category === cty);
        setDataItems(newArray);
      }
  }

  /* filter by search */

  const fitlterbySearch = (w) => {
      if (w !== ""){
        const newArray = foodData.filter((item) => item.Name === w);
        setDataItems(newArray);
      }
  }

  return (
    <div className='app'>
        <Navbar fitlterbySearch={fitlterbySearch}/>
        <div className='content'>
        <Header/>
        <Category filterCategory={filterCategory} allCategory={allCategory}/>
        <Carts dataItem={dataItems}/>
        </div>
    </div>
  )
}

export default App