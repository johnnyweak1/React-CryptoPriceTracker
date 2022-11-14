import React from "react";
import CoinRow from './CoinRow'

function CoinsTable(props)
{
    const coins = props.data.map((coin, index) => <CoinRow data={coin} key={index} index={index+1}/>)

    return (<div>{coins}</div>)
}

export default CoinsTable;