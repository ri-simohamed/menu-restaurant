import React, { useState } from 'react'
import './Navbar.scss'

const Navbar = ({ fitlterbySearch }) => {

  const [searchValue, setSearchValue] = useState('');

  const onSearch = () => {
    fitlterbySearch(searchValue);
    setSearchValue('');
  }

  return (
    <div className="navbar">
        <div className="left">
            <h1>Menu-Restaurant</h1>
        </div>
        <div className="right">
            <div className="search">
                <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} type="text" placeholder='Search...'/>
                <button onClick={onSearch}>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar