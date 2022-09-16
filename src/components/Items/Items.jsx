
import axios from "axios";

function Items({ item, fetchItem }) {

    const buyItem = () => {
        axios ({
            method: 'PUT',
            url: `/shopping/${item.id}`
        }).then((response) => {
            fetchItem();
        }).catch((error) => {
            alert(`Error with ${item.name} purchase. Please try again.`)
        })
    }
    console.log('item purchased:', item.purchased);
    
    const removeItem = () => {
        axios({
            method: 'DELETE',
            url: '/shopping/${item.id}'
        })
        .then((delRes) => {
            console.log('ID Deleted', delRes);
        })
        .catch ((delErr) => {
            console.log('ID Deleted Error', delErr);
        });    
    }
    
    return (
    <>
        <li>{item.name}</li>
        <li>{item.quantity} {item.units}</li>
        {item.purchased === true ? "Purchased" : <button onClick={buyItem}>Buy</button>}
        {item.purchased === true ? "" : <button onClick={removeItem}>Remove</button>}
    </>
    )
    
}

export default Items;
