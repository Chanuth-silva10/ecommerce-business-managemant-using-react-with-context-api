import React, { useContext } from 'react';
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'

function Header() {
  const value = useContext(GlobalState)
  return(
   <header>
        <div className='menu'>
             <img src={Menu} alt=""  width="30"/>
        </div>
  </header>
  );
}

export default Header;
