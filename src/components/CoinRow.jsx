import React, { useEffect } from "react";
import {useState} from "react"

function CoinRow(props)
{
    const [price, updatePrice] = useState(null)
    const [priceState, updatePriceState] = useState('same')
    const [priceChangePercentage, updatePercentage] = useState(null)

    useEffect(() => {
        updatePrice(props.data.current_price)
        updatePercentage(()=>{
            if (props.data.price_change_percentage_24h > 0)
            {
                updatePriceState('higher')
            }
            else if (props.data.price_change_percentage_24h < 0)
            {
                updatePriceState('lower')
            }
            else {
                updatePriceState('same')
            }
            return props.data.price_change_percentage_24h
        })
        
    }, [props]
    )

   

    return(
        <div key={props.index} className={priceState}>
        <ul>
            <li>{props.index}. </li>
            <li>{props.data.name}</li>
            <li className="price">{Math.round(priceChangePercentage*100)/100}% {priceState === 'higher' ? '⬆' : '⬇'} {props.data.current_price} $</li>
        </ul>
        </div>
    )
}

export default CoinRow;