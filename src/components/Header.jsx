import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
          <div className='log' ><div className='crypt' >Crypto</div><div>Nexus</div></div>
          <ul>
            <li><Link className='lin' to="/">Home</Link></li>
            <li><Link className='lin' to="/exchanges">Exchanges</Link></li>
            <li><Link className='lin' to="/coins">Coins</Link></li>
          </ul>
    </div>
  )
}

export default Header
