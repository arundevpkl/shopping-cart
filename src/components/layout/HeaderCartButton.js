import React from 'react'
import './HeaderCartButton.css'

const HeaderCartButton = () => {
    const numberOfCartItems = 2;
  return (
    <button className='cart-button '>
    <span className='icon'>
      {/* <CartIcon /> */}
    </span>
    <span>Your Cart</span>
    <span className='badge'>{numberOfCartItems}</span>
  </button>
  )
}

export default HeaderCartButton