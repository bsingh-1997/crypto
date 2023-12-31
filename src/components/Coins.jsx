import React, { useEffect, useState } from 'react'
import axios from "axios"
import { server } from '../index'
import Loader from './Loader'
import './exchanges.css'
import Error from './Error'
import CoinCard from './CoinCard'

const Coins = () => {
const [coins,setCoins]= useState([])
const [error,setError]= useState(false)
const[exchanges,setExchanges]= useState([]);
const[loading,setLoading]= useState(true);
const[page,setPage]= useState(1);
const[currency,setCurrency]= useState("inr");
const currencySymbol= currency==="inr"?"₹":currency==="eur"?"€":"$"
const changePage =(page)=>{
  setPage(page);
  setLoading(true)
}
const btns = new Array(132).fill(1)
  useEffect(() => {
    const fetchCoins = async()=>{
      try {
        const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
        setCoins(data)
        
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    } 
    fetchCoins()
  }, [currency,page])
  
  if(error){
    return <Error message="Error while fetching Coins !"/>
  }

  return (
    <div className='exbody'>
      {loading?<Loader/>:<>

        <div className='rdoo' value={currency} onChange={(e)=>setCurrency(e.target.value)}>
         <input type="radio" name="rad" value="inr"/>INR 
         <input type="radio" name="rad" value="usd"/>USD 
         <input type="radio" name="rad" value={"eur"}/>EUR 
        </div> 
      
      
      <div className='cardscontainer'>
         {coins.map((i)=>(

          <CoinCard name={i.name} symbol={i.symbol} img={i.image} key={i.id}  id={i.id} price={i.current_price} currencySymbol={currencySymbol}/>
      
         ))}
          </div>   
               <div className='butncnt'>
              {
                btns.map((item,index)=>(
                  <div className='bntn' key={index} onClick={()=>changePage(index + 1)}>
                  {index + 1}
                  </div>
                  ))
              }
            
              </div>   
      </>}
    </div>
  )
}

export default Coins
