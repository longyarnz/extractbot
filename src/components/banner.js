import React, { Component } from 'react';
import btc from '../images/btc.png'
import ltc from '../images/ltc.png'
import eth from '../images/eth.png'

export default class Banner extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      BTC: 0, ETH: 0, LTC: 0
    }
  }
  
  async componentDidMount() {
    const { USD: BTC } = await fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD').then(res => res.json());
    const { USD: ETH } = await fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD').then(res => res.json());
    const { USD: LTC } = await fetch('https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD').then(res => res.json());
    this.setState({ BTC, LTC, ETH });
  }

  render() {
    const { BTC, ETH, LTC } = this.state;
    return (
      <section className='banner'>
        <div>
          <button><img src={btc} alt="Bitcoin Logo"/>Bitcoin: ${BTC}</button>
          <button><img src={eth} alt="Ethereum Logo"/>Ethereum: ${ETH}</button>
          <button><img src={ltc} alt="Litecoin Logo"/>Litecoin: ${LTC}</button>
        </div>
      </section>
    );
  }
}