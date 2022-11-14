import React, { useEffect } from "react"
import { useState } from "react";
import axios from "axios";
import CoinsTable from "./CoinsTable"
import Navbar from "./Navbar";
import { unstable_batchedUpdates } from "react-dom";



const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

function App(){
    const [data, updateData] = useState([])
    
    
    async function getData()
    {
        await axios.get(url).then((response)=>
        {
            updateData(response.data)
            
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    

    useEffect(()=>{
        getData()
        setInterval(getData, 30000)
        
    },[])
    

    return(
        <div>
            <Navbar />
            <CoinsTable data={data}/>
        </div>
        
    )

}


export default App;