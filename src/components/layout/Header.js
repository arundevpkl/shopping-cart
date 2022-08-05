import React,{Fragment} from 'react'
import './Header.css'
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
  return (
    <Fragment>
      <header className='header'>
        <h1>Shopping Cart</h1>
        <HeaderCartButton />
      </header>
      
    </Fragment>
  )
}

export default Header