import { useState } from 'react';
import axios from 'axios'; 

function AddItem({fetchItem}) {

    const [newItem, setNewItem] = useState({name:'', quantity:'', units:''})
    // 
    const handleSubmit = (event) => {
        event.preventDefault();
        addNewItem(newItem)
    }

    function emptyInputs() {
        setNewItem({name:''})
        setNewItem({quantity:''})
        setNewItem({units: ''})
    }
    const addNewItem = (item) => {
        console.log(`newItem in newItem: ${item}`)
        axios({
            method: 'POST',
            url: '/shopping',
            data: {
                name: item.name,
                quantity: item.quantity,
                units: item.units
            }
        }).then((response) => {
            console.log('this???')
            fetchItem()
            emptyInputs()
        }).catch((error) => {
            console.log('add item failed', error)
        })
    } 
    
    const handleChange = e => {
        const { name, value } = e.target;
        setNewItem(newItem => ({
            ...newItem,
            [name]: value
        }));
    };


   



    return(
        <form onSubmit={handleSubmit}>
            <h1>Add new item</h1>
            <input onChange={handleChange}
                    type="text"
                    value={newItem.name}
                    placeholder="Item Name" 
                    name="name"
                    />
            <input onChange={handleChange}
                    type="text"
                    value={newItem.quantity}
                    placeholder="How many?" 
                    name="quantity"
                    />
            <input onChange={handleChange}
                    type="text"
                    value={newItem.units}
                    placeholder="Units"
                    name="units"/>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default AddItem;