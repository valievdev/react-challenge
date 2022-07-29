import React, { useEffect, useState } from 'react'
import './App.css'

// This is what the data from API looks like
/**
 * @typedef {object} BinanceData 
 * @property {number} id transaction id
 * @property {number} price currency price
 * @property {number} qty quantity purchased
 * @property {number} time time crypto was purchased at
*/

// This is the component you can pass the data from each trade too
import Trade from './trade';

function App() {


	// When you start storing this data in state, something very strange will happen
	// You'll see in the console that data keeps getting logged over and over again
	// But we only want to fetch it once
	// That's because this useEffect has one glaring issue. See README for details
	useEffect(() => {
		fetch(`https://api.binance.com/api/v3/trades?symbol=DOGEUSDT`)
			.then((response) => response.json())
			.then((data) => {
				/** @type {BinanceData} */
				const binanceData = data;

				console.log(binanceData); // This data variable holds the parsed API response. Check the browser console to see how it looks

				// Your code goes here to store the data


			})
	})

  return (
    <div className="App">
			<h1>Welcome to your React Challenge</h1>
			<h2>Visit the README.md file for instructions on getting started</h2>
			{/* Once you store the data in state, I reccomend you to initially dump it on the screen so you know it worked */}
			{/* You can use modify and use the code snippet below */}
			{/* NAME_OF_STATE_WITH_DATA && JSON.stringify(NAME_OF_STATE_WITH_DATA) */}

			{/* This trade component takes from props. You can go to src/trade.jsx to see */}
			{/* <Trade /> */}

    </div>
  )
}

export default App
