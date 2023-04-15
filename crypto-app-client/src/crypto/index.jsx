import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import './index.css'

const columns = [
    {
        name: 'Ranking',
        selector: row => row.market_cap_rank,
        sortable: false,
    },
    {
        name: 'Picture',
        selector: (row, id) => {
            return <img src={row.image} alt='notloaded' height={"100px"} width={"100px"} />
        },
        sortable: true,
    },
    {
        name: 'Name',
        selector: row => row.name,
        sortable: false,
    },
    {
        name: 'Day high',
        selector: row => row.high_24h,
        sortable: false,
    },
    {
        name: 'Day low',
        selector: row => row.low_24h,
        sortable: false,
    },
    {
        name: 'Symbol',
        selector: row => row.symbol,
        sortable: false,
    },
    {
        name: 'Current Price',
        selector: row => row.current_price,
        sortable: false,
    },
    {
        name: 'Last Updated',
        selector: row => row.last_updated,
        sortable: false,
    },
    {
        name: 'Total Volume',
        selector: row => row.total_volume,
        sortable: false,
    },
  
];


const  CryptoCoinList  = () => {
    
    const [coinList, setCoinList] = useState([]);
    const [setIsDataLoading] = useState(false);
    
    const getCoins = async () => {
        try {
            const {data} = await axios.get('http://localhost:3001/crypto');
            setCoinList(data);
            setIsDataLoading(false)
        } catch (error) {
            // console.error(error);
        }
    }
    useEffect(()=>{
        getCoins();
    })
    
    return (
        <div>
             <DataTable
            columns={columns}
            data={coinList}
            pagination
            title="Crypto Live"
        />
        </div>
    )
}
export default CryptoCoinList;


