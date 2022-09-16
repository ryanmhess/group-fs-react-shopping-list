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
    return (
    <>
        <li>{item.name}</li>
        <li>{item.quantity}</li>
        <li>{item.units}</li>
        <>{item.purchased === true ? "Purchased" : <button onClick={buyItem}>Buy</button>}</>
    </>
    )
}

export default Items;