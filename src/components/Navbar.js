import './NavbarStyles.css'
import { Component } from 'react'
import{MenuItems} from './MenuItems'
import {Link} from 'react-router-dom'
class Navbar extends Component{
state={clicked:false};
handleClick=()=>{
    this.setState({ clicked: !this.state.clicked});
}

    render(){
        return(

            <nav className="NavbarItems">
                <div className='logz'>
                <div className='navbar-logo'>Crypto</div><div className='logo2'>Nexus</div>
                </div>

            <div className='menu-icons' onClick={this.handleClick}>
                <i className={this.state.clicked ?"fas fa-times":"fas fa-bars"}></i>
            </div>

                <ul className={this.state.clicked ?"nav-menu active" : "nav-menu "}>
                    {MenuItems.map((item,index) =>{
                        return (
                    
                    <li key={index}>
                        <a className={item.cName} href={item.url}>
                            <i className={item.icon}></i>{item.title}
                            </a>
                    </li>

                        )
                    })}
                    {/* <button>SignUp</button> */}
                </ul>
            </nav>
        )
        
    }
}
export default Navbar;