

function ListItem({ shoppingList }) {
    return (
        <>
            {shoppingList.map(item => {
                return (
                    <ul key={item.id}>
                        <li>{item.name}</li>
                        <li>{item.quantity}</li>
                        <li>{item.units}</li>
                    </ul>
                )
            })}
        </>
    )
}

export default ListItem;