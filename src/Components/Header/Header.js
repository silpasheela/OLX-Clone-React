import React, { useContext } from 'react';
import {signOut} from 'firebase/auth'
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import {AuthContext} from '../../store/Context'
import { auth } from '../../firebase/config';
import { useNavigate,Link } from 'react-router-dom';

function Header() {

  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" defaultValue={"Kerala"}/>
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find Cars, Mobile Phones and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
        {user ? (
        <>
          <span>{user.displayName}</span>
          <hr />
        </>
      ) : (
        <Link to="/login">
          <span style={{fontWeight:'bold',color:'black'}}>Login</span>
          <hr />
        </Link>
      )}
        </div>
        {user && <button style={{borderRadius:'25px'}} onClick={()=>{
          signOut(auth)
          navigate('/login')
        }}>Logout</button>}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <Link to={auth?.currentUser?'/create':'/login'}><span>SELL</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
