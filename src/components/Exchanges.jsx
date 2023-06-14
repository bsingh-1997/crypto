import React, { useEffect, useState } from 'react'
import axios from "axios"
import { server } from '../index'
import Loader from './Loader'
import './exchanges.css'
import Error from './Error'
const Exchanges = () => {

const [error,setError]= useState(false)
const[exchanges,setExchanges]= useState([]);
const[loading,setLoading]= useState(true);

  useEffect(() => {
    const fetchExchanges = async()=>{
      try {
        const {data} = await axios.get(`${server}/exchanges?per_page=250`)
        setExchanges(data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    } 
    fetchExchanges()
  }, [])
  
  if(error){
    return <Error message="error while fetching api"/>
  }

  return (
    <div className='exbody'>
      {loading?<Loader/>:<>
      <div className='cardscontainer'>
         {exchanges.map((i)=>(

          <ExchangeCard name={i.name} rank={i.trust_score_rank} img={i.image} url={i.url} key={i.id}  />
      
         ))}
          </div>      
      </>}
    </div>
  )
}
const ExchangeCard=({name,img,rank,url})=>(
  <div className='excards'>
  <a href={url} target='blank'>
  <div ><img src={img}></img>
  <heading>{rank} </heading>
  <text>{name}</text>
  </div>
  </a>
  </div>
)

export default Exchanges
