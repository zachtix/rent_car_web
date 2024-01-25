import { useState } from "react"
import "@scss/components/Navbar.scss"
import { SearchNormal1, Setting4, Heart, Notification, Setting2, User } from "iconsax-react";
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [ inputSearch, setInputSearch ] = useState("")
  return(
    <>
    <div className="navBar">
      <div className="container">
        <div className="leftContent">
          {/* <h1 className="logo">MORENT</h1> */}
          <Link className="logo" to="/" >MORENT</Link>
          <div className="searchContainer">
            <SearchNormal1 size="24" color="#596780"/>
            <input type="text" value={inputSearch} placeholder="Search comething here" onChange={(e)=>setInputSearch(e.target.value)} />
            <Setting4 size="24" color="#596780" className="filter" />
          </div>
        </div>
        <div className="rightContent">
          <button className="btnHeart"><Heart size="24" color="#596780" variant="Bold"/></button>
          <button className="btnNoti"><Notification size="24" color="#596780" variant="Bold"/></button>
          <button className="btnSetting"><Setting2 size="24" color="#596780" variant="Bold"/></button>
          <button className="btnUser"><User size="24" color="#596780" variant="Bold"/></button>
        </div>
      </div>
      <div className="searchMobile">
        <div className="inputContainer">
          <SearchNormal1 size="24" color="#596780"/>
          <input type="text" value={inputSearch} placeholder="Search comething here" onChange={(e)=>setInputSearch(e.target.value)} />
        </div>
        <div className="filter">
          <Setting4 size="24" color="#596780" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar