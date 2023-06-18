import React from 'react'
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import { server } from '../index';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Error from './Error';
import Coins from './Coins';
import "./coindetails.css"
import ProgressBar from './ProgressBar';
 import Chart from './Chart';
const CoinDetails = () => {
 
  const [coin,setCoin]= useState({})
  const [error,setError]= useState(false)
  const[exchanges,setExchanges]= useState([]);
  const[loading,setLoading]= useState(true);
  const[page,setPage]= useState(1);
  const[currency,setCurrency]= useState("inr");
  const currencySymbol= currency==="inr"?"₹":currency==="eur"?"€":"$"
const[days,setDays]= useState("24h")
const[chartArray,setChartArray]= useState([])
const btns=["24h","7d","14d","30d","60d","200d","1y","max"]
const switchChartStats=(key)=>{
  switch (key) {
    case "24h":
      setDays("24h")
      setLoading(true)
      break;

    case "7d":
      setDays("7d")
      setLoading(true)
      break;
  
      
    case "14d":
      setDays("14d")
      setLoading(true)
      break;
  
    case "30d":
      setDays("30d")
      setLoading(true)
      break;
  
    case "60d":
      setDays("60d")
      setLoading(true)
      break;
  
    
    case "200d":
      setDays("200d")
      setLoading(true)
      break;
  
    case "1y":
      setDays("365d")
      setLoading(true)
      break;
  
  
    case "max":
      setDays("max")
      setLoading(true)
      break;
  

    default:
      break;
  }
}
const params = useParams()


 useEffect(() => {
    const fetchCoins = async()=>{
      try {
        const {data} = await axios.get(`${server}coins/${params.id}`)

        const {data:chartData} = await axios.get(`${server}coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`)
        console.log(chartData)
        setCoin(data)
        setChartArray(chartData.prices)
        console.log(data)
        setLoading(false)

        // setLoading(true)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    } 
    fetchCoins()
  }, [params.id,currency,days])
  
  if(error) return<Error message={"Error while fetching coin !"}/>;
  
  
  return (
    <container className='mainbox' >
      {
        loading?<Loader/>:(
          <>
          <box className='chrtbox'> 
            
            <Chart arr={chartArray} days={days} currency = {currencySymbol} />
          </box>

          <div className='tmfry'>
        {

          btns.map((i)=>(
            <button className='tmfrm' key={i} onClick={(()=>switchChartStats(i))}>{i}</button>
          ))
        }
          </div>

        <div className='rbtn' value={currency} onChange={(e)=>setCurrency(e.target.value)}>
         <input type="radio" name="rad" value="inr"/>INR 
         <input type="radio" name="rad" value="usd"/>USD 
         <input type="radio" name="rad" value={"eur"}/>EUR 
        </div> 
      
          <div>
            <div>Last Updated On {"  "} 
            {(coin.market_data.last_updated)}</div>

        <div className='ccard' >


            <img className='coino'  src={coin.image.large}/>
          
          <div className='nm'>{coin.name}</div>
          <div className='nm'>{currencySymbol}{coin.market_data.current_price[currency]}</div>
          <div className='nm'> {coin.market_data.price_change_percentage_24h >= 0 ? <div><img className='stockup' src="https://media.istockphoto.com/id/1334431049/vector/up-arrow-and-circle.jpg?s=612x612&w=0&k=20&c=GMERrewDCr268lxO6MoTpCmsC2LnbwaZ5y3-osCQ3n8="/></div> : <div ><img className='stockup' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Eo_circle_red_arrow-down.svg/2048px-Eo_circle_red_arrow-down.svg.png'/></div>} {coin.market_data.price_change_percentage_24h}% </div>
          <div className='rank ' >{`#${coin.market_cap_rank}`}</div>
          
        </div>
        </div>

          <ProgressBar completed={50} high={`${currencySymbol}${coin.market_data.high_24h[currency]}`} low={`${currencySymbol}${coin.market_data.low_24h[currency]}`} bgcolor={"green"} />

          <div className='containerdivs'>
            <div className='disdet' ><div className='marg' >Max Supply</div><div className='marg2' >${coin.market_data.max_supply}</div> </div>
            {/* <div>{`Circulating Supply ${coin.market_data.circulating_supply}`} </div> */}
            <div className='disdet'><div className='marg'>Circulating Supply</div><div className='marg2'>
            {coin.market_data.circulating_supply}
              </div> </div>
            <div className='disdet'><div className='marg'>Market Cap</div><div className='marg2'>{coin.market_data.market_cap[currency]}</div> </div>
            <div className='disdet'><div className='marg'>All Time Low </div><div className='marg2'>{currencySymbol}{coin.market_data.atl[currency]}</div> </div>
            <div className='disdet'><div className='marg'>All Time High</div><div className='marg2'>{currencySymbol}{coin.market_data.ath[currency]}</div> </div>
          </div>

          </>
        )
      }
    </container>
  )
}
  
export default CoinDetails
