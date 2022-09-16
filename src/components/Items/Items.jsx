import axios from 'axios';

function Items({ item }) {

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
    <ul>
        <li>{item.name}</li>
        <li>{item.quantity}</li>
        <li>{item.units}</li>
        <button onClick={removeItem}>Remove</button>
    </ul>
    )
}

export default Items;
