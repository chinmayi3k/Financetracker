import React, { useState,useEffect} from "react";
import {Bar} from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
export const Barchart=()=>{
    
    const [Trans,SetTrans]=useState([]);
     
    const tranids=Trans.map((tran)=>tran.tran_id);
    const money=Trans.map((tran)=>sum(tran.budget));
    const income=Trans.map((tran)=> tran.type=="cr"?
       sum(tran.budget):0);
     const expenses=money-income;
    
    useEffect(()=>
    fetch("http://localhost:4000/Transactions/")
    .then((res)=>res.json())
    .then((res=>SetTrans())),[]);

      return(
        <div>
        <h1>Bar Chart</h1>
        <Bar
      data={{
      
        labels:[tranids],
        datasets: [
          {
            data:[money],
          
            backgroundColor: ["red","green","yellow","orange"],
            barPercentage: 0.01,
            barThickness:16,
            borderWidth: 0.2,
          }
        ]
      }}
      height={"150px"}
      width={"300px"}
                options={{
                  title:{
                    display:true,
                    text:'Literacy rate In India ',
                    fontSize:20
                  },
                  
                  scales: {
                    xAxes: [{
                      gridLines:{
                        color:"rgba(0,0,0,0)",
                      },
                        barPercentage: 0.01,
                        barThickness:9,
                    }],
                    yAxes:[{
                      gridLines:{
                        drawOnChartArea:false
                      }
                    }]
                } ,
                 
                  legend: {
                    labels: {
                      fontSize: 12,
                    }
                  }
                }}
              />

        </div>
      )
} 