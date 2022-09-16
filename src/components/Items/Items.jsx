
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
        <li>{item.quantity}</li>
        <li>{item.units}</li>
        <button onClick={removeItem}>Remove</button>
    </ul>

        {item.purchased === true ? "Purchased" : <button onClick={buyItem}>Buy</button>}
    </>
    )
    
}

export default Items;
