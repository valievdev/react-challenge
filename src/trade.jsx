import React from 'react';
import './trade.css';
import PropTypes from 'prop-types'

/// TODO: DONT EDIT THIS CODE !!!!!!!!!

/**
 * @typedef {object} TradeProps	
 * @property price {number} Required prop 
 * @property qty {number} Required prop
 * @property time {number} Required prop
 * @property {string} [currency=DOGE] Optional, defaults to DOGE 
 */

/**
 * React component that displays trade data from Binance API
 * @param props {TradeProps}
 * @returns {JSX.Element} React Component
*/
function Trade({ price, qty, time, currency }) {
	currency = currency || 'DOGE';

	let priceElement;
	if (!price) {
		priceElement = 'missing price';
		console.error('Trade component missing \'price\' prop');
	} else {
		priceElement = <span className="accent">{Math.round(price * 100000) / 100000} USD / {currency}</span>;
	}

	if (!qty) {
		console.error('Trade component missing \'qty\' prop');
	}

	let formattedDateTime;
	if (!time) {
		console.error('Trade component missing \'time\' prop');
		formattedDateTime = 'Missing time data';
	} else {
		const dateOfTrade = new Date(time);
		formattedDateTime = dateOfTrade.toString();
	}
	
	return (
		<li className="trade">
			<h3 className="trade__price">
				{qty ? Math.round(qty) : 'Missing qty'} {currency}
			</h3>
			<div className="trade__details">
				<span>{priceElement}</span>
				<span>{formattedDateTime}</span>
			</div>
		</li>	
	)
}

Trade.propTypes = {
	price: PropTypes.number.isRequired,
	qty: PropTypes.number.isRequired,
	time: PropTypes.number.isRequired,
	currency: PropTypes.number,
}

Trade.defaultProps = {
	currency: 'DOGE'
}

export default Trade;
