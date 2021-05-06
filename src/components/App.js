import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItems } from '../actions';
import ItemsList from './ItemsList';
import Header from './Header';
import axios from 'axios';

const App = () => {
    const[login,setLogin]=React.useState(false);

    const handleSubmit = async(data) => {

//    await axios.post(`https://localhost:8080/login`)
//   .then(response => response.json())
//   .then(data => {console.log(data);localStorage.setItem('login',{'token':data.token}); setLogin(true)});
      localStorage.setItem('login',{'token':'sdjhebdcajhewfbjhewbr237hdy3ebdwusjhdbnchjasdbjhbc'});
      setLogin(true);
    };
   
    React.useEffect(()=>{
        if(localStorage.getItem('login'))
        {
            
            setLogin(true);
        }
    })
    

    return (
        <div className={'wrapper'}>
            <Header
            login={login}
            setLogin={setLogin}
            handleSubmit={handleSubmit}
            />

            <h1 >LANDS</h1>
            
            <ItemsList login={login}/>
        </div>
    )
}

export default connect()(App)
