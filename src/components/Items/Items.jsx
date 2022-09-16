function Items({ item }) {
    console.log(`hey`);
    return (
    <ul>
        <li>{item.name}</li>
        <li>{item.quantity}</li>
        <li>{item.units}</li>
    </ul>
    )
}

export default Items;