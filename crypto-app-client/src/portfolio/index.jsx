import React, { useState} from 'react'
import axios from 'axios';
import './index.css'
// Import as a module in your JS

const Portfolio = (props) => {
    const [suggestions, setSuggestions] = useState([]);

    //console.log(data)
    const getSuggestions = async (evt) => {
        const {value} = evt.target;
        const {data} =await axios.get(`http://localhost:3001/coin/suggestions?name=${value}`);
        console.log(data)
        setSuggestions(data)
    }

    return (
        <>
            <form action="">
                <div className="portfolio">
                    <div className="portfolio-content">
                        <h1>Portfolio</h1>
                        <div className="search">
                            <input className="search-box" list="datalistOptions" id="exampleDataList"
                             onChange={getSuggestions} placeholder="search crypto coin here..." />
                            <table>
                                <thead>
                                    <tr>
                                        <th>name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {suggestions.map(i=>{
                                        return <tr>
                                        <td>{i.name}</td>
                                    </tr>
                                    })}
                                    
                                </tbody>
                            </table>
                            <button className="btn">search</button>
                        </div>
                        <div className="info">
                            <label htmlFor="current-price">Current Price Of Coin</label>--
                            <input type="float" placeholder='current price' />
                        </div>
                        <div className="info">
                            <label htmlFor="quantity">Quantity To Buy</label>--
                            <input type="integer" placeholder='enter quantity here' />
                        </div>
                        <div className="total">
                            <label htmlFor="total">Total Investment</label>--
                            <input type="float" placeholder='total money invested' />
                        </div>
                        <div className="buy">
                            <button className="buy-btn">
                                SAVE
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )

}
export default Portfolio;