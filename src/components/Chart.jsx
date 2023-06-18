import React from 'react'
import './chart.css'
import {Line} from "react-chartjs-2"
import {Chart as ChartJs,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend}from "chart.js"

ChartJs.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend)

const Chart = ({arr=[],currency,days}) => {
  console.log(arr)
  const prices = []
  const date = []
  
  for (let i = 0; i < arr.length; i++) {
    if(days==="24h") date.push(new Date(arr[i][0]).toLocaleTimeString())    
    else date.push(new Date(arr[i][0]).toLocaleDateString())    
    prices.push(arr[i][1])
  }
  console.log("this is dfinakfuhyu")
  console.log(date)
  const data ={
    labels:date,
    datasets:[{
        label:`Price in ${currency}`,
        data:prices,borderColor:"rgba(255,99,132)",
        backgroundColor:"rgba(255,99,132,0.5)"
    }]
}

    return (
      <Line className='crt' options={{
        responsive:true,
    }}
    data={data}  height={'100px'} 
    />
  )
}

export default Chart
