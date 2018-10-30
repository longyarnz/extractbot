import React from 'react'

const Card = props => (
  <figure className='plan-card'>
    <figcaption>
    </figcaption>
    <figcaption>
      <ul>
        <h4>{props.name}</h4>
        <li>
          <span>Hash Power:</span> {props.power}GH/s
        </li>
        <li>
          <span>CPU Usage:</span> {props.cpu}
        </li>
        <li>
          <span>Minable Coin/month:</span> {props.coins}btc
        </li>
        <li>
          <span>Plan Price:</span> ${props.price}
        </li>
      </ul>
    </figcaption>
  </figure>
);

export default function Plan() {
  return (
    <section className='plan' id='plan'>
      <h1>Bot Plans</h1>
      <main>
        <Card name='Major Bot' power={300} cpu='Not Required' coins='1.40' price={200} />
        <Card name='Major Bot' power={300} cpu='Not Required' coins='1.40' price={200} />
        <Card name='Major Bot' power={300} cpu='Not Required' coins='1.40' price={200} />
        <Card name='Major Bot' power={300} cpu='Not Required' coins='1.40' price={200} />
      </main>
    </section>
  )
}