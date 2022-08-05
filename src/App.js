/*global chrome*/

import './App.css';
import {useEffect, useState} from "react";
import CartProvider from './store/CartProvider';
import Header from './components/layout/Header';
import Meals from './components/products/Meals'
import SignUp from './components/auth/SignUp';

const sendTokenToChromeExtension = ({ extensionId, jwt}) => {
  chrome.runtime.sendMessage(extensionId, { jwt }, response => {
    if (!response.success) {
      console.log('error sending message', response);
      return response;
    }
    console.log('Sucesss ::: ', response.message)
  });
}

function App() {
  const [auth,setAuth] = useState(false);

  useEffect(() => {
    sendTokenToChromeExtension({ extensionId: 'joeibnoddmkbggaacjmfnefdmpdgpkmb', jwt: 'xxxxx.yyyyy.zzzzz'})
  }, [])

  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <h1>Chrome extension Token authentication</h1>
    //     <p>The token to be sent is <code>xxxxx.yyyyy.zzzzz</code></p>
    //   </header> */}
    
    // </div>
      <CartProvider>
      <Header auth={auth}/>
      <main>
        {!auth && <SignUp/>}
        {auth && <Meals/>}
      </main>
    </CartProvider>
  );
}

export default App;