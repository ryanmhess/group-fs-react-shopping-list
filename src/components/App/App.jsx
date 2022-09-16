import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header.jsx';
import ListItem from '../ListItem/ListItem.jsx';
import AddItem from '../AddItem/AddItem.jsx';
// import RemoveItem from '../RemoveItem/RemoveItem.jsx';
// import UpdateItem from '../UpdateItem/UpdateItem.jsx';



function App() {

    useEffect(() => {
        fetchItem();
    }, [])

    let [shoppingList, setShoppingList] = useState([]);

    //  GET ROUTE
    const fetchItem = () => {
        axios({
            method: 'GET',
            url: '/shopping'
        }).then((getRes) => {
            console.log('Fetch got us:', getRes);
            setShoppingList(getRes.data);
        }).catch((getErr) => {
            console.log('getErr:', getErr);
        })
    }

    return (
        <div className="App">
            <Header />   
            <main>
                <p>Under Construction...</p>

                <AddItem fetchItem={fetchItem}/> 

                <ListItem shoppingList={shoppingList}/>

                {/* <UpdateItem /> */}

                {/* <RemoveItem /> */}

            </main>
        </div>
    );
}

export default App;
