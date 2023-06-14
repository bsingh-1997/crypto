import React from 'react'
import { Link } from 'react-router-dom'
import './coincard.css'

    const CoinCard=({id,name,img,rank,price,url,symbol,currencySymbol="₹"})=>(
        <div className='excoinss'>
        {/* <Link to = '/coin/${id}' > */}
        <Link to = {`/coins/${id}`} >
        <div ><img src={img}></img>
        <heading>{symbol} </heading>
        <text>{name}</text>
        <text>{price?`${currencySymbol}${price}`:"NA"}</text>
        </div>
        </Link>
        </div>
      )
      

export default CoinCard
