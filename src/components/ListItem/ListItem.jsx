

function ListItem({ shoppingList }) {
    return (
        <ul>
            {shoppingList.map(item => {
                return (
                    <>
                        <li>{item.name}</li>
                        <li>{item.quantity}</li>
                        <li>{item.units}</li>
                    </>
                )
            })}
        </ul>
    )
}

export default ListItem;