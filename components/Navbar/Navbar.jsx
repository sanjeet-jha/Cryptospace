import React, { useContext } from 'react'
import './Navbar.css'
import logo1 from '../../assets/logo1.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (event)=>{

    switch (event.target.value){
      case "usd":{
        setCurrency({name: "usd", symbol: "$"});
        break
      }
      case "eur":{
        setCurrency({name: "eur", symbol: "€"});
        break
      }
      case "inr":{
        setCurrency({name: "inr", symbol: "₹"});
        break
      }
      default :{
        setCurrency({name: "usd", symbol: "$"});
        break
      }
    }

  }

  return (
    <div className='navbar'>
      <Link to={'/'}>
        <h1><img className='arrow' src={arrow_icon} /> CRYPTOSPACE</h1>
        </Link>
        <ul>
           <Link to={'/'}> </Link>
            
        </ul>


        <div className="nav-right">
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EURO</option>
                <option value="inr">INR</option>
                
            </select>
            
        </div>
      
    </div>
  )
}

export default Navbar
