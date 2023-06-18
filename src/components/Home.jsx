import React from 'react'
import './home.css'
import { server } from '..'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='hedd'>
      <div className='heading'>Crypto Nexus: Explore Exchanges and Coins</div>
          <div className='box1'>

                <div className='details'>
                Welcome to Crypto Nexus, the ultimate destination for all your crypto exchange and coin exploration needs.Whether you're a seasoned investor or just getting started in the exciting world of cryptocurrencies, our website offers a comprehensive platform for you to dive deep into the realm of crypto.
                    <div className='btncnt'>
                    <a href='/crypto/#/coins'  target='blank'><div className='bbutton'>Explore Coins</div></a>

                    <a href='/crypto/#/exchanges' target='blank'><div className='bbutton' >Explore Exchanges</div></a>
        
                    </div>
                </div>
              <div className='logo'><img className='btc' src='https://i.ebayimg.com/images/g/5t4AAOSwfKFg7zZx/s-l1600.jpg'/></div>
          </div>





    <div className='heading2'> Crypto Power Rankings: Unveiling the Top Selling Coins</div>
    <div className='clis'>
      <Link to= '/coins/bitcoin'><div className='btclogo'><img className='logsiz' src='https://th.bing.com/th/id/R.423a1ff7af47189f975514c75fa2c9be?rik=Mv5rFlDwyqqSTQ&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fpapirus-team%2fpapirus-apps%2f512%2fbitcoin-icon.png&ehk=0zQAyCS6BeKc7c9RzEUt28sCcOFMWUruCMwWtQHYHv0%3d&risl=&pid=ImgRaw&r=0'/> </div></Link>
      <Link to= '/coins/ethereum'><div className='btclogo'><img className='logsiz' src='https://th.bing.com/th/id/OIP.L4b16I550WQrdaCF5Le79AHaHa?w=189&h=187&c=7&r=0&o=5&dpr=1.1&pid=1.7'/></div></Link>
      <Link to= '/coins/tether'><div className='btclogo'><img className='logsiz' src='https://th.bing.com/th?id=OIP.pEDUtRL00rm2PTq4gY_J4wHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2'/></div></Link>
      <Link to= '/coins/binancecoin'><div className='btclogo'><img className='logsiz' src='https://th.bing.com/th?id=OIP.n69WHhu9Qn1dc5tTkkk1fwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2'/></div></Link>
    {/* <div className='btclogo'>BTC</div> */}
    {/* <div className='btclogo'>BTC</div> */}
    </div>
    <div className='clis'>
    <Link to= '/coins/ripple'><div className='btclogo'><img className='logsiz' src='https://th.bing.com/th/id/OIP.IT_zofIM6j7lc-u9tP24oAHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7'/></div></Link>
    <Link to= '/coins/staked-ether'><div className='btclogo'><img className='logsiz' src='https://cryptodailygazette.com/wp-content/uploads/2018/07/xrp-xrp.jpg'/></div></Link>
    <Link to= '/coins/cardano'><div className='btclogo'><img className='logsiz' src='https://cryptologos.cc/logos/steth-steth-logo.png'/></div></Link>
    <Link to= '/coins/'><div className=' pp'>Explore more...</div></Link>
    {/* <div className='btclogo'>BTC</div> */}
    </div>



    <div className='heading3'> Exchange Elite: Uncovering the Top Crypto Exchanges</div>
    <div className='clis'>
      <a href= 'https://www.binance.com' target='blank' ><div className='btclogo'><img className='logsiz' src='https://th.bing.com/th/id/R.423a1ff7af47189f975514c75fa2c9be?rik=Mv5rFlDwyqqSTQ&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fpapirus-team%2fpapirus-apps%2f512%2fbitcoin-icon.png&ehk=0zQAyCS6BeKc7c9RzEUt28sCcOFMWUruCMwWtQHYHv0%3d&risl=&pid=ImgRaw&r=0'/> </div></a>
      <a href= 'https://www.bybit.com' target='blank' ><div className='btclogo'><img className='logsiz' src='https://th.bing.com/th/id/OIP.nVdDUrVkYTbTnBVrUYccRgHaEK?pid=ImgDet&rs=1'/> </div></a>
      <a href= 'https://gate.io' target='blank' ><div className='btclogo'><img className='logsiz' src='https://assets.coingecko.com/markets/images/60/small/gate_io_logo1.jpg?1654596784'/> </div></a>
      <a href= 'https://www.kucoin.com' target='blank' ><div className='btclogo'><img className='logsiz' src='https://assets.coingecko.com/markets/images/61/small/kucoin.png?1640584259'/> </div></a>
    </div>

    <div className='clis'>
      <a href= 'https://www.huobi.com' target='blank' ><div className='btclogo'><img className='logsiz' src='https://assets.coingecko.com/markets/images/25/small/logo_V_colour_black.png?1669177364'/> </div></a>
      <a href= 'https://r.kraken.com/c/2223866/687155/10583' target='blank' ><div className='btclogo'><img className='logsiz' src='https://assets.coingecko.com/markets/images/29/small/kraken.jpg?1584251255'/> </div></a>
      <a href= 'https://crypto.com/exchange' target='blank' ><div className='btclogo '><img className='logsiz' src='https://assets.coingecko.com/markets/images/589/small/h2oMjPp6_400x400.jpg?1669699705'/> </div></a>
      <a href= '/#/exchanges' target='blank' ><div className='pp'>Explore more...</div></a>
    </div>
    
    



    <div className='box4'><div className='heading3'>About Us</div>
    Welcome to Crypto Nexus, the ultimate destination for all your crypto exchange and coin exploration needs. Whether you're a seasoned investor or just getting started in the exciting world of cryptocurrencies, our website offers a comprehensive platform for you to dive deep into the realm of crypto.

At Crypto Nexus, we provide a curated list of crypto exchanges, showcasing the top platforms available in the market. From established giants to emerging players, you'll find detailed information about each exchange, including their features, fees, supported cryptocurrencies, and security measures. Our aim is to empower you with the knowledge you need to make informed decisions about where to trade and invest.

But it doesn't stop there. We understand that coins are the heart and soul of the crypto ecosystem. That's why we bring you in-depth insights into various cryptocurrencies. Explore the vast landscape of digital coins, learn about their underlying technology, development teams, market performance, and potential use cases. Our comprehensive coin profiles provide you with a wealth of information to understand the ins and outs of each crypto asset.

Crypto Nexus is your go-to resource for staying up to date with the latest developments in the crypto space. We offer news articles, expert analysis, and educational content to help you expand your knowledge and keep track of the ever-evolving world of cryptocurrencies. Whether you're researching, investing, or simply exploring, our website is designed to be your trusted companion on your crypto journey.

Join us at Crypto Nexus and unlock the gateway to crypto exchanges and coins. Start exploring, learning, and engaging with the fascinating world of cryptocurrencies today!
    </div>

</div>
  )
}

export default Home
