import React from 'react'
import { Link } from 'react-router-dom'
import './coincard.css'

    const CoinCard=({id,name,img,rank,price,url,symbol,currencySymbol="₹"})=>(
        <div className='excoinss'>
        {/* <Link to = '/coin/${id}' > */}
        <Link to = {`/coins/${id}`} >
        <div ><img className="logimg" src={img}></img>
        <div className='blk' >{symbol} </div>
        <div className='blk' >{name}</div>
        <div className='blk' >{price?`${currencySymbol}${price}`:"NA"}</div>
        </div>
        </Link>
        </div>
      )
      

export default CoinCard
