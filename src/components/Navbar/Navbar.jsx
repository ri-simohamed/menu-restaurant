import React from 'react'
import './Navbar.scss'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="left">
            <h1>Menu-Restaurant</h1>
        </div>
        <div className="right">
            <div className="search">
                <input type="text" placeholder='Search...'/>
                <button>Search</button>
            </div>
            <MenuOutlinedIcon className='icons'/>
        </div>
    </div>
  )
}

export default Navbar